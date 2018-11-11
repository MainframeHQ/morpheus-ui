// @flow

import React, { Component } from 'react'
import hoistStatics from 'hoist-non-react-statics'

import { Consumer } from './Form'

import { REQUIRED, EMAIL } from './validation'

import type {
  FieldName,
  FieldValue,
  FieldValidateFunction,
  DefaultErrorMessages,
  FormContext,
} from './types'

type Props = FormContext & {
  name: FieldName,
  defaultValue?: ?FieldValue,
  label?: string,
  required?: ?boolean,
  onChange?: ?(value: ?FieldValue) => void,
  validation?: ?FieldValidateFunction | ?Array<FieldValidateFunction>,
  type?: ?string,
  errorMessages: DefaultErrorMessages,
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
        value: this.props.defaultValue,
        validate: this.validate,
      })
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
    const { validation, required, type } = this.props
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

  render() {
    const {
      addField,
      removeField,
      errorMessages,
      valueChanged,
      render,
      ...other
    } = this.props
    const props = {
      ...other,
      onChange: this.onChange,
      setDirty: this.setDirty,
      ...this.state,
      fieldValue: this.props.values[this.props.name],
      errorMessage: this.props.errors[this.props.name],
    }

    return render(props)
  }
}

export default (Component: any) => {
  return (props: Object) => {
    const FinalComponent = (
      <Consumer>
        {(value: FormContext) => {
          return (
            <Field
              {...props}
              {...value}
              render={(fieldProps: Props) => <Component {...fieldProps} />}
            />
          )
        }}
      </Consumer>
    )
    //
    // FinalComponent.displayName = `withFormContext(${Component.displayName ||
    //   Component.name})`
    // FinalComponent.WrappedComponent = Component

    return hoistStatics(FinalComponent, Component)
  }
}
