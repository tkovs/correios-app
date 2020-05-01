import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons'

import App from './App'
import { name as appName } from './app.json'
import configureStore from './src/store'

global.Buffer = global.Buffer || require('buffer').Buffer

Icon.loadFont()
const store = configureStore()

const Main = () => (
  <NavigationContainer>
    <PaperProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </PaperProvider>
  </NavigationContainer>
)

AppRegistry.registerComponent(appName, () => Main)
