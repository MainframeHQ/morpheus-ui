//@flow

import React, { createContext, Component } from 'react'

export const DEFAULT_THEME = {
  typography: {
    fontSize: 12,
    fontFamily: 'Poppins',
  },
  spacing: {
    basic: 15,
    small: 5,
    large: 30,
  },
  borders: {
    width: 1,
    roundness: 5,
  },
  colors: {
    main: {
      primary: '#102043',
      secondary: '#D72323',
      error: '#D72323',
      alert: '#3A5084',
      success: 'green',
      border: '#2D2D2D',
      text: '#313131',
    },
    dark: {
      primary: 'black',
      secondary: 'red',
      error: 'red',
      alert: 'yellow',
      success: 'green',
    },
    light: {
      primary: 'gray',
      secondary: 'red',
      error: 'red',
      alert: 'yellow',
      success: 'green',
    },
  },
}

const ThemeContext = createContext(DEFAULT_THEME)

const { Provider } = ThemeContext

type Props = {
  theme: Object,
  children: any,
}

export class ThemeProvider extends Component<Props> {
  render() {
    return <Provider value={this.props.theme}>{this.props.children}</Provider>
  }
}

export default ThemeContext
