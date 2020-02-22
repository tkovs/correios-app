import React from 'react'
import { SafeAreaView, View, StyleSheet } from 'react-native'
import { FAB } from 'react-native-paper'

import Header from '../../components/Header'
import PacketList from '../../components/PacketList'

import { colors } from '../../styles/theme'

import mockPackets from '../../__mocks__/packets.json'

const Home = () => (
  <SafeAreaView style={styles.container}>
    <Header />
    <View style={styles.body}>
      <PacketList packets={mockPackets} />
    </View>
    <FAB icon="plus" style={styles.floatingButton} />
  </SafeAreaView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
