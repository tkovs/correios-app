import React from 'react'
import PropTypes from 'prop-types'
import { View, SafeAreaView, StyleSheet } from 'react-native'

import Header from './Header'
import PacketTrackingInfo from '../../components/PacketTrackingItem'

function PacketInfo({ packet }) {
  return (
    <SafeAreaView style={styles.container}>
      <Header title={packet.title} />

      <View>
        <PacketTrackingInfo
          status="Encaminhado"
          from="AC Assis Chateaubriand: Assis Chateaubriand - PR"
          to="CTCE Curitiba: Curitiba - PR"
          location="Assis Chateaubriand - PR"
          note="Sujeito a encaminhamento no próximo dia útil"
        />
        <PacketTrackingInfo
          status="Postado"
          from="AC Assis Chateaubriand: Assis Chateaubriand - PR"
          location="Assis Chateaubriand - PR"
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

PacketInfo.propTypes = {
  packet: PropTypes.shape({
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
  }).isRequired,
}

export default PacketInfo
