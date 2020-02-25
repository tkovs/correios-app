import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import isEmpty from 'lodash/isEmpty'

import PacketItem from '../PacketItem'

const PacketList = ({ packets }) => {
  if (isEmpty(packets)) {
    return null
  }

  return (
    <View>
      {packets.map(packet => (
        <PacketItem packet={packet} key={packet.code} />
      ))}
    </View>
  )
}

PacketList.propTypes = {
  packets: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default PacketList
