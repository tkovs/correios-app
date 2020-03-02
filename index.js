import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'

import App from './App'
import { name as appName } from './app.json'

const Main = () => (
  <NavigationContainer>
    <PaperProvider>
      <App />
    </PaperProvider>
  </NavigationContainer>
)

AppRegistry.registerComponent(appName, () => Main)
