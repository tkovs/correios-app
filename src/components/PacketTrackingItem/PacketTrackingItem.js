import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { Caption, Text, Title } from 'react-native-paper'

function PacketTrackingItem({ date, status, from, to, location, note }) {
  return (
    <View>
      <Caption>{date.toString()}</Caption>
      <Title>{status}</Title>
      <Text>{from}</Text>
      <Text>{to}</Text>
      <Text>{location}</Text>
      <Caption>Obs.: {note}</Caption>
    </View>
  )
}

PacketTrackingItem.propTypes = {
  status: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  to: PropTypes.string,
  location: PropTypes.string.isRequired,
  note: PropTypes.string,
  date: PropTypes.instanceOf(Date).isRequired,
}

PacketTrackingItem.defaultProps = {
  to: '',
  note: undefined,
}

export default PacketTrackingItem
