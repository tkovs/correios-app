import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import PacketsCount from './PacketsCount'
import { hydrateWithStatus } from '../../utils/correios'

function PacketsCountContainer({ packets, filter }) {
  const quantity = filter
    ? packets.filter(packet => packet.status === filter).length
    : packets.length

  console.log(quantity, filter, packets)

  return <PacketsCount quantity={quantity} />
}

PacketsCountContainer.defaultProps = {
  filter: null,
}

PacketsCountContainer.propTypes = {
  packets: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string,
}

const mapStateToProps = ({ packets }) => ({
  packets: packets.list.map(packet => hydrateWithStatus(packet)),
})

export default connect(mapStateToProps)(PacketsCountContainer)
