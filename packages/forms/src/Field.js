// @flow

import React, { Component } from 'react'
import hoistStatics from 'hoist-non-react-statics'

import { Consumer } from './Form'

import { REQUIRED, EMAIL } from './validation'

import type {
  FieldValue,
  FormContext,
  PreFieldProps,
  FieldProps,
} from './types'

type Props = FormContext &
  PreFieldProps & {
    render: (component: any) => void,
  }

type State = {
  dirty: boolean,
}

class Field extends Component<Props, State> {
  static defaultProps = {
    errorMessages: {
      invalidEmail: 'Please provide a valid e-mail address.',
      requiredField: '$label is required.',
    },
  }

  state = {
    dirty: false,
  }

  componentDidMount() {
    this.props.name &&
      this.props.addField({
        name: this.props.name,
        value: this.props.value || this.props.defaultValue,
        validate: this.validate,
      })
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.value !== prevProps.value) {
      this.onChange(this.props.value)
    }
  }

  componentWillUnmount() {
    this.props.removeField(this.props.name)
  }

  onChange = (fieldValue: ?FieldValue) => {
    this.props.name && this.props.valueChanged(this.props.name, fieldValue)

    if (this.props.onChange) {
      this.props.onChange(fieldValue)
    }
  }

  validate = (fieldValue: ?FieldValue): string => {
    const { validation, required, type, values } = this.props
    let errorMessage = ''

    let newValidation = validation
    if (!newValidation) {
      newValidation = []
    } else if (!Array.isArray(newValidation)) {
      newValidation = [newValidation]
    }

    if (required) {
      newValidation = [REQUIRED, ...newValidation]
    }

    if (type === 'email') {
      newValidation = [EMAIL, ...newValidation]
    }

    errorMessage = newValidation
      .map(fun =>
        fun({
          value: fieldValue,
          values: values,
          name: this.props.label || this.props.name,
          errorMessages: this.props.errorMessages,
        }),
      )
      .filter(m => m)
      .join(' ')

    return errorMessage
  }

  setDirty = () => {
    this.setState({
      dirty: true,
    })
  }

  shouldNotRender() {
    const { renderIfValid } = this.props
    if (renderIfValid) {
      const fields = Array.isArray(renderIfValid)
        ? renderIfValid
        : [renderIfValid]
      return fields.filter(field => this.props.errors[field]).length
    }

    return false
  }

  render() {
    const {
      addField,
      removeField,
      errorMessages,
      valueChanged,
      renderIfValid,
      render,
      ...other
    } = this.props
    if (this.shouldNotRender()) {
      return null
    }

    const props = {
      ...other,
      onChange: this.onChange,
      setDirty: this.setDirty,
      ...this.state,
      fieldValue: this.props.values[this.props.name],
      errorMessage: this.props.errors[this.props.name],
    }

    //$FlowFixMe
    return render(props)
  }
}

export default (Component: any, defaultProps?: Object = {}) => {
  return (props: Object) => {
    const FinalComponent = (
      <Consumer>
        {(value: FormContext) => {
          return (
            <Field
              {...defaultProps}
              {...props}
              {...value}
              render={(fieldProps: FieldProps) => <Component {...fieldProps} />}
            />
          )
        }}
      </Consumer>
    )

    return hoistStatics(FinalComponent, Component)
  }
}
