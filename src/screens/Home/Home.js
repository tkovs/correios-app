import React, { useState, useCallback } from 'react'
import { SafeAreaView, View, StyleSheet, Dimensions } from 'react-native'
import { FAB } from 'react-native-paper'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view'

import AddPacketModal from '../../components/AddPacketModal'
import Header from './Header'
import PacketList from '../../components/PacketList'
import PacketsCount from '../../components/PacketsCount'
import Toast from '../../components/Toast'

import { colors } from '../../styles/theme'

const AllPacketsRoute = () => (
  <View style={styles.body}>
    <PacketsCount testID="all-packets-count" />
    <PacketList />
  </View>
)

const PendingPacketsRoute = () => (
  <View style={styles.body}>
    <PacketsCount filter="pending" testID="pending-packets-count" />
    <PacketList filter="pending" />
  </View>
)

const DeliveredPacketsRoute = () => (
  <View style={styles.body}>
    <PacketsCount filter="delivered" testID="delivered-packets-count" />
    <PacketList filter="delivered" />
  </View>
)

const initialLayout = { width: Dimensions.get('window').width }

const renderTabBar = (props) => (
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
    { key: 'all', testID: 'allPacketsTabButton', title: 'Todos' },
    { key: 'pending', testID: 'pendingPacketsTabButton', title: 'Pendentes' },
    {
      key: 'delivered',
      testID: 'deliveredPacketsTabButton',
      title: 'Entregues',
    },
  ])

  const renderScene = SceneMap({
    all: AllPacketsRoute,
    pending: PendingPacketsRoute,
    delivered: DeliveredPacketsRoute,
  })

  const onDismiss = useCallback(() => setModalVisible(false), [])

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <AddPacketModal onDismiss={onDismiss} visible={modalVisible} />

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
        testID="add-packet-fab"
      />

      <Toast />
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
