import React from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'

const PacketItem = ({ packet }) => {
  return (
    <Text>
      {packet.title} - {packet.createdAt}
    </Text>
  )
}

PacketItem.propTypes = {
  packet: PropTypes.shape({
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
}

export default PacketItem
