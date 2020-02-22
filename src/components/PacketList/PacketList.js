import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'

const PacketList = ({ packets }) => {
  return (
    <View>
      {packets.map(packet => (
        <Text key={packet.code}>
          {packet.title} - {packet.createdAt}
        </Text>
      ))}
    </View>
  )
}

PacketList.propTypes = {
  packets: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default PacketList
