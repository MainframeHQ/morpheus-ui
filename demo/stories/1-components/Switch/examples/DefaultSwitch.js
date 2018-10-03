// @flow

import React, { Component } from 'react'
import { View } from 'react-native'
import { action } from '@storybook/addon-actions'
import { Switch } from '@morpheus-ui/core'

const styles = {
  background: {
    backgroundColor: '#1a2d57',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
}

export default class DefaultSwitchExample extends Component<{}> {
  render() {
    return (
      <View style={styles.background}>
        <Switch defaultState={true} onPress={action('clicked')} />
      </View>
    )
  }
}
