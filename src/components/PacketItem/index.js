import React from 'react'
import PropTypes from 'prop-types'
import { useNavigation } from '@react-navigation/native'

import PacketItem from './PacketItem'
import { hydrateWithStatus } from '../../utils/correios'

function PacketItemContainer(props) {
  const { packet: packetProp, ...rest } = props
  const navigation = useNavigation()

  const packet = hydrateWithStatus(packetProp)

  const navigateToPacketItemInfo = () =>
    navigation.navigate('PacketInfo', { packet })

  return (
    <PacketItem onClick={navigateToPacketItemInfo} {...rest} packet={packet} />
  )
}

PacketItemContainer.propTypes = {
  packet: PropTypes.shape({
    title: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired,
    statuses: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
}

export default PacketItemContainer
