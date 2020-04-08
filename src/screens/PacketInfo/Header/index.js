import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { removePacket as removePacketAction } from '../../../store/actions/packets'

import Header from './Header'

const mapDispatchToProps = dispatch => ({
  removePacket: code => dispatch(removePacketAction(code)),
})

function HeaderContainer(props) {
  const { removePacket, code, ...rest } = props
  const { goBack } = useNavigation()

  return (
    <Header {...rest} goBack={goBack} removePacket={() => removePacket(code)} />
  )
}

HeaderContainer.propTypes = {
  removePacket: PropTypes.func.isRequired,
  code: PropTypes.string.isRequired,
}

export default connect(
  null,
  mapDispatchToProps
)(HeaderContainer)
