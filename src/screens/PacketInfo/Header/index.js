import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { removePacket, archivePacket } from '../../../store/actions/packets'
import { addFeedback } from '../../../store/actions/feedback'

import Header from './Header'

function HeaderContainer(props) {
  const { archivePacket: archive, removePacket: remove, code, ...rest } = props
  const { goBack } = useNavigation()

  return (
    <Header
      {...rest}
      goBack={goBack}
      removePacket={() => remove(code)}
      archivePacket={() => archive(code)}
    />
  )
}

HeaderContainer.propTypes = {
  removePacket: PropTypes.func.isRequired,
  archivePacket: PropTypes.func.isRequired,
  code: PropTypes.string.isRequired,
}

const mapDispatchToProps = dispatch => ({
  removePacket: code => dispatch(removePacket(code)),
  archivePacket: code => dispatch(archivePacket(code)),
  addFeedback: message => dispatch(addFeedback(message)),
})

export default connect(
  null,
  mapDispatchToProps
)(HeaderContainer)
