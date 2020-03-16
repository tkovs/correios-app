import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { Text } from 'react-native-paper'

function PacketTrackingItem({ status, from, to, location, note }) {
  return (
    <View>
      <Text>{status}</Text>
      <Text>{from}</Text>
      <Text>{to}</Text>
      <Text>{location}</Text>
      <Text>{note}</Text>
    </View>
  )
}

PacketTrackingItem.propTypes = {
  status: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  note: PropTypes.string,
}

PacketTrackingItem.defaultProps = {
  note: '',
}

export default PacketTrackingItem
