import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import PacketItem from './PacketItem'
import { statusListSelector } from '../../store/selectors/packets'

function PacketItemContainer(props) {
  const { packet } = props
  const navigation = useNavigation()

  const navigateToPacketItemInfo = () =>
    navigation.navigate('PacketInfo', { code: packet.code })

  return <PacketItem onClick={navigateToPacketItemInfo} {...props} />
}

const mapStateToProps = state => ({
  statusList: statusListSelector(state),
})

PacketItemContainer.defaultProps = {
  statusList: [],
}

PacketItemContainer.propTypes = {
  packet: PropTypes.shape({
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired,
    updatedAt: PropTypes.objectOf(Date).isRequired,
    createdAt: PropTypes.objectOf(Date).isRequired,
    lastView: PropTypes.objectOf(Date),
    statuses: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
  statusList: PropTypes.arrayOf(PropTypes.object),
}

export default connect(mapStateToProps)(PacketItemContainer)
