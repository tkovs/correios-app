import React from 'react'
import { SafeAreaView, View, StyleSheet } from 'react-native'
import { Appbar } from 'react-native-paper'
import { colors } from './src/styles/theme'

const App = () => (
  <SafeAreaView style={styles.container}>
    <Appbar.Header style={styles.header}>
      <Appbar.Content title="Correios" subtitle="Rastreio de pacotes" />
    </Appbar.Header>
    <View style={styles.body} />
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
    backgroundColor: colors.isabelline,
    flex: 1,
  },
})

export default App
