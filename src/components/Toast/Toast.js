import React from 'react'
import PropTypes from 'prop-types'
import { Snackbar } from 'react-native-paper'

function Toast({ duration, message, onDismiss, visible }) {
  return (
    <Snackbar visible={visible} onDismiss={onDismiss} duration={duration}>
      {message}
    </Snackbar>
  )
}

Toast.propTypes = {
  duration: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  onDismiss: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
}

export default Toast
