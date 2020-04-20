import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import PacketInfo from './PacketInfo'
import { packetsListSelector } from '../../store/selectors/packets'

function PacketInfoContainer(props) {
  const { route, packets, ...rest } = props
  const { code } = route.params

  const packet = packets.find(_packet => _packet.code === code)

  return <PacketInfo {...rest} packet={packet} />
}

PacketInfoContainer.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      code: PropTypes.string.isRequired,
    }),
  }).isRequired,
  packets: PropTypes.arrayOf(PropTypes.object).isRequired,
}

const mapStateToProps = state => ({
  packets: packetsListSelector(state),
})

export default connect(mapStateToProps)(PacketInfoContainer)
