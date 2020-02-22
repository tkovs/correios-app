import React from 'react'
import { SafeAreaView, View, Text, StyleSheet } from 'react-native'
import { Button, Appbar } from 'react-native-paper'
import { colors } from './src/styles/theme'

const App = () => (
  <SafeAreaView style={styles.container}>
    <Appbar.Header style={styles.header}>
      <Appbar.Content title="Correios" subtitle="Rastreio de pacotes" />
    </Appbar.Header>
    <View style={styles.body}>
      <Text style={styles.text}>Correios</Text>
      <Button icon="camera" mode="outlined">
        Press me
      </Button>
    </View>
  </SafeAreaView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: colors.blue,
  },
  body: {
    backgroundColor: '#111',
  },
  text: {
    color: '#ddd',
    textAlign: 'center',
  },
})

export default App
