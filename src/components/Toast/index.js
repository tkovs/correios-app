import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Toast from './Toast'
import { clearFeedback } from '../../store/actions/feedback'
import {
  messageSelector,
  visibleSelector,
} from '../../store/selectors/feedback'

function ToastContainer({ hideToast, message, visible }) {
  return (
    <Toast
      message={message}
      visible={visible}
      onDismiss={hideToast}
      duration={3000}
    />
  )
}

ToastContainer.propTypes = {
  hideToast: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  message: messageSelector(state),
  visible: visibleSelector(state),
})

const mapDispatchToProps = dispatch => ({
  hideToast: () => dispatch(clearFeedback()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToastContainer)
