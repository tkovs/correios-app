import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import PacketsCount from './PacketsCount'
import { packetsListWithoutArchivedSelector } from '../../store/selectors/packets'

function PacketsCountContainer({ packets, filter, testID }) {
  const quantity = filter
    ? packets.filter(packet => packet.status === filter).length
    : packets.length

  return <PacketsCount quantity={quantity} testID={testID} />
}

PacketsCountContainer.defaultProps = {
  filter: null,
  testID: null,
}

PacketsCountContainer.propTypes = {
  packets: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string,
  testID: PropTypes.string,
}

const mapStateToProps = state => ({
  packets: packetsListWithoutArchivedSelector(state),
})

export default connect(mapStateToProps)(PacketsCountContainer)
