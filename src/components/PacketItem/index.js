import React from 'react'
import PropTypes from 'prop-types'
import { useNavigation } from '@react-navigation/native'
import PacketItem from './PacketItem'

function PacketItemContainer(props) {
  const { packet } = props
  const navigation = useNavigation()

  const navigateToPacketItemInfo = () =>
    navigation.navigate('PacketInfo', { packet })

  return <PacketItem onClick={navigateToPacketItemInfo} {...props} />
}

PacketItemContainer.propTypes = {
  packet: PropTypes.shape({
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
  }).isRequired,
}

export default PacketItemContainer
