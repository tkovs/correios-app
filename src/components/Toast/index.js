import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Toast from './Toast'
import { clearFeedback } from '../../store/actions/feedback'

function ToastContainer({ hideToast, message, visible }) {
  useEffect(() => {
    if (visible) {
      setTimeout(hideToast, 3000)
    }
  }, [visible])
  return <Toast message={message} visible={visible} />
}

ToastContainer.propTypes = {
  hideToast: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
}

const mapStateToProps = ({ feedback }) => ({
  message: feedback.message,
  visible: feedback.visible,
})

const mapDispatchToProps = dispatch => ({
  hideToast: () => dispatch(clearFeedback()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToastContainer)
