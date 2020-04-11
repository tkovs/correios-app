import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import PacketsCount from './PacketsCount'
import { packetsListSelector } from '../../store/selectors/packets'

function PacketsCountContainer({ packets, filter }) {
  const quantity = filter
    ? packets.filter(packet => packet.status === filter).length
    : packets.length

  return <PacketsCount quantity={quantity} />
}

PacketsCountContainer.defaultProps = {
  filter: null,
}

PacketsCountContainer.propTypes = {
  packets: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string,
}

const mapStateToProps = state => ({
  packets: packetsListSelector(state),
})

export default connect(mapStateToProps)(PacketsCountContainer)
