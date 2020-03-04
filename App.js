import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './src/screens/Home'
import PacketInfo from './src/screens/PacketInfo'

const Stack = createStackNavigator()

const App = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="PacketInfo" component={PacketInfo} />
  </Stack.Navigator>
)

export default App
