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
          status="Postado"
          from="CTE Benfica: Rio de Janeiro - RJ"
          to="CTE Centro: Rio de Janeiro - RJ"
          location="Rio de Janeiro - RJ"
          note="Sujeito a encaminhamento no próximo dia útil"
        />
        <PacketTrackingInfo
          status="Postado"
          from="CTE Benfica: Rio de Janeiro - RJ"
          to="CTE Centro: Rio de Janeiro - RJ"
          location="Rio de Janeiro - RJ"
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
