import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import PacketList from './PacketList'
import { packetsListSelector } from '../../store/selectors/packets'

function PacketListContainer(props) {
  const { packets: packetsProp, filter, ...rest } = props
  const packets = filter
    ? packetsProp.filter(packet => packet.status === filter)
    : packetsProp

  return <PacketList {...rest} packets={packets} />
}

PacketListContainer.defaultProps = {
  filter: null,
}

PacketListContainer.propTypes = {
  packets: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string,
}

const mapStateToProps = state => ({
  packets: packetsListSelector(state),
})

export default connect(mapStateToProps)(PacketListContainer)
