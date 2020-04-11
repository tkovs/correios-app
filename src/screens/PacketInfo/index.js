import React from 'react'
import PropTypes from 'prop-types'

import PacketInfo from './PacketInfo'

function PacketInfoContainer(props) {
  const { route } = props
  const { packet } = route.params

  return <PacketInfo {...props} packet={packet} />
}

PacketInfoContainer.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      packet: PropTypes.shape({
        title: PropTypes.string.isRequired,
        code: PropTypes.string.isRequired,
        mode: PropTypes.string.isRequired,
        statuses: PropTypes.array.isRequired,
      }),
    }),
  }).isRequired,
}

export default PacketInfoContainer
