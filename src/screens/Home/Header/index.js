import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import Header from './Header'
import { updatePackets } from '../../../store/actions/packets'

function HeaderContainer(props) {
  const { goBack } = useNavigation()

  return <Header {...props} goBack={goBack} />
}

HeaderContainer.propTypes = {
  updatePackets: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  updatePackets: () => dispatch(updatePackets()),
})

export default connect(
  null,
  mapDispatchToProps
)(HeaderContainer)
