import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'

function PacketInfo({ packet }) {
  return (
    <View>
      <Text>{packet.title}</Text>
    </View>
  )
}

PacketInfo.propTypes = {
  packet: PropTypes.shape({
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
  }).isRequired,
}

export default PacketInfo
