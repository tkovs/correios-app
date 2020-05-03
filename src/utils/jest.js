import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { Provider as PaperProvider } from 'react-native-paper'
import theme from '../styles/theme'

export const getComponentWithRedux = (store, children) => (
  <ReduxProvider store={store}>{children}</ReduxProvider>
)

export const getComponentWithPaper = children => (
  <PaperProvider theme={theme}>{children}</PaperProvider>
)
