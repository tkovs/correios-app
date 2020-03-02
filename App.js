/* eslint-disable react/prop-types */
import React from 'react'
import { View, Text } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack'
import Home from './src/screens/Home'

const Stack = createStackNavigator()

const A = ({ route }) => (
  <View>
    <Text>{route.params.packet.title}</Text>
  </View>
)

const App = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="PacketInfo" component={A} />
  </Stack.Navigator>
)

export default App
