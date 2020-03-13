import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'

import Header from './Header'

function PacketInfo({ packet }) {
  return (
    <SafeAreaView style={styles.container}>
      <Header title={packet.title} />

      <View>
        <Text>{packet.status}</Text>
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
