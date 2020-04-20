import React from 'react'
import PropTypes from 'prop-types'
import { useNavigation } from '@react-navigation/native'

import PacketItem from './PacketItem'

function PacketItemContainer(props) {
  const { packet } = props
  const navigation = useNavigation()

  const navigateToPacketItemInfo = () =>
    navigation.navigate('PacketInfo', { code: packet.code })

  return <PacketItem onClick={navigateToPacketItemInfo} {...props} />
}

PacketItemContainer.propTypes = {
  packet: PropTypes.shape({
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired,
    statuses: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
}

export default PacketItemContainer
