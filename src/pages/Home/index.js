import React, { useState } from 'react'
import { SafeAreaView, View, StyleSheet, Dimensions, Text } from 'react-native'
import { FAB, Portal, Modal } from 'react-native-paper'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view'

import Header from '../../components/Header'
import PacketList from '../../components/PacketList'

import { colors } from '../../styles/theme'

import mockPackets from '../../__mocks__/packets.json'

const AllPacketsRoute = () => (
  <View style={styles.body}>
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
  const [index, setIndex] = useState(0)
  const [modalVisible, setModalVisible] = useState(false)
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

      <Portal>
        <Modal visible={modalVisible} onDismiss={() => setModalVisible(false)}>
          <View style={styles.addPacketModal}>
            <Text>Add a packet</Text>
          </View>
        </Modal>
      </Portal>

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
  addPacketModal: {
    backgroundColor: '#fff',
  },
})

export default Home
