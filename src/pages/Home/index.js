import React from 'react'
import { SafeAreaView, View, StyleSheet } from 'react-native'
import { Appbar, FAB } from 'react-native-paper'
import { colors } from '../../styles/theme'

const Home = () => (
  <SafeAreaView style={styles.container}>
    <Appbar.Header style={styles.header}>
      <Appbar.Content title="Correios" subtitle="Rastreio de pacotes" />
    </Appbar.Header>
    <View style={styles.body} />
    <FAB icon="plus" style={styles.floatingButton} />
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
  floatingButton: {
    position: 'absolute',
    margin: 16,
    bottom: 0,
    right: 0,
    backgroundColor: colors.blue,
  },
})

export default Home
