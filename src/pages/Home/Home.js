import React, { useState } from 'react'
import { SafeAreaView, View, StyleSheet, Dimensions } from 'react-native'
import { FAB } from 'react-native-paper'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view'

import Header from '../../components/Header'
import PacketList from '../../components/PacketList'
import PacketsCount from '../../components/PacketsCount'
import AddPacketModal from '../../components/AddPacketModal'

import { colors } from '../../styles/theme'

import mockPackets from '../../__mocks__/packets.json'

const AllPacketsRoute = () => (
  <View style={styles.body}>
    <PacketsCount quantity={mockPackets.length} />
    <PacketList packets={mockPackets} />
  </View>
)

const initialLayout = { width: Dimensions.get('window').width }

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: colors.sandstorm }}
    style={{ backgroundColor: colors.blue }}
  />
)

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [index, setIndex] = useState(0)
  const [routes] = useState([
    { key: 'all', title: 'Todos' },
    { key: 'pending', title: 'Pendentes' },
    { key: 'delivered', title: 'Entregues' },
  ])

  const renderScene = SceneMap({
    all: AllPacketsRoute,
    pending: AllPacketsRoute,
    delivered: AllPacketsRoute,
  })

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <AddPacketModal
        onDismiss={() => setModalVisible(false)}
        visible={modalVisible}
      />

      <TabView
        renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />

      <FAB
        icon="plus"
        onPress={() => setModalVisible(true)}
        style={styles.floatingButton}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    backgroundColor: colors.snow,
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
