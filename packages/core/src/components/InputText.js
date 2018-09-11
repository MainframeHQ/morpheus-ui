// @flow

import React, { Component } from 'react'
import { View, TextInput, StyleSheet } from 'react-native-web'
import COLORS from '../colors'
import { BASIC_SPACING, INPUT_HEIGHT } from '../styles'

type Props = {
  white: boolean,
  halfWidth: boolean,
  fullWidth: boolean,
  multiline: boolean,
  singleLine: boolean,
  placeholder: string,
  onBlur?: () => void,
  onFocus?: () => void,
}

type State = {
  active: boolean,
}

export default class InputText extends Component<Props, State> {
  state = {
    active: false,
  }

  onFocus = () => {
    this.setState({
      active: true,
    })
    this.props.onFocus && this.props.onFocus()
  }

  onBlur = () => {
    this.setState({
      active: false,
    })
    this.props.onBlur && this.props.onBlur()
  }
  render() {
    const fieldStyles = [styles.field]
    const fieldContainerStyles = [styles.fieldContainer]

    if (this.state.active) {
      fieldContainerStyles.push(styles.activeFieldContainer)
    }
    console.log(this.state)

    if (this.props.white) {
      fieldContainerStyles.push({ backgroundColor: COLORS.WHITE })
      fieldStyles.push({ backgroundColor: COLORS.WHITE })
    }

    if (this.props.halfwidth) {
      fieldStyles.push(styles.half)
    } else {
      fieldStyles.push(styles.full)
    }

    if (this.props.multiline) {
      fieldStyles.push(styles.multiline)
    } else {
      fieldStyles.push(styles.singleLine)
    }

    return (
      <View style={fieldContainerStyles}>
        <TextInput
          {...this.props}
          style={fieldStyles}
          value={this.state.text}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          placeholder={this.props.placeholder}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  fieldContainer: {
    backgroundColor: COLORS.LIGHT_GRAY,
    paddingHorizontal: 3 * BASIC_SPACING,
    paddingVertical: 5,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginVertical: BASIC_SPACING,
    flexShrink: 0,
  },
  field: {
    flex: 1,
    fontSize: 16,
    color: COLORS.DARK_GRAY,
    backgroundColor: COLORS.LIGHT_GRAY,
    outline: 'none',
  },
  half: {
    width: '50%',
  },
  full: {
    width: '100%',
  },
  activeFieldContainer: {
    borderStyle: 'solid',
    borderWidth: 1,
    paddingHorizontal: 3 * BASIC_SPACING - 1,
    borderColor: COLORS.MEDIUM_GRAY,
  },
  singleLine: {
    height: INPUT_HEIGHT,
  },
  multiline: {
    paddingVertical: BASIC_SPACING * 2,
  },
})
