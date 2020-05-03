import { DefaultTheme } from 'react-native-paper'

export const colors = {
  blue: '#01417F',
  yellow: '#F9D900',
  white: '#FFFFFF',
  sandstorm: '#EEC643',
  licorice: '#141414',
  snow: '#f9f9f9',
  green: '#3E8989',
  gray: '#939393',
  red: '#C52233',
}

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.sandstorm,
  },
}
