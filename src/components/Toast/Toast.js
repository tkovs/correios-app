import React from 'react'
import PropTypes from 'prop-types'
import { Snackbar } from 'react-native-paper'

function Toast({ message, visible }) {
  return <Snackbar visible={visible}>{message}</Snackbar>
}

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
}

export default Toast
