// @flow

import React, { Component } from 'react'
import { View } from 'react-native'
import { action } from '@storybook/addon-actions'
import { Switch } from '@morpheus-ui/core'

const styles = {
  background: {
    backgroundColor: '#1a2d57',
    height: 90,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
}

export default class ControlSwitchExample extends Component<{}> {
  constructor(props) {
    super(props)
    this.copyState = this.copyState.bind(this)
  }

  state = {
    myBool: false,
  }

  copyState() {
    this.setState({ myBool: !this.state.myBool })
  }

  render() {
    return (
      <View style={styles.background}>
        <Switch onPress={this.copyState} />
        <Switch control={this.state.myBool} />
      </View>
    )
  }
}
