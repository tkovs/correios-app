import React, { FC } from 'react'
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux'

import Toast from './Toast'
import { clearFeedback } from '../../store/actions/feedback'
import {
  messageSelector,
  visibleSelector,
} from '../../store/selectors/feedback'
import { FeedbackActionTypes } from '../../store/actions/feedback/types'

interface StateProps {
  message: string
  visible: boolean
}

interface DispatchProps {
  hideToast: () => FeedbackActionTypes
}

type Props = DispatchProps & StateProps

const ToastContainer: FC<Props> = ({ hideToast, message, visible }: Props) => {
  return (
    <Toast
      message={message}
      visible={visible}
      onDismiss={hideToast}
      duration={3000}
    />
  )
}

const mapStateToProps: MapStateToProps<StateProps, {}, State> = (
  state: State
) => ({
  message: messageSelector(state),
  visible: visibleSelector(state),
})

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = (
  dispatch
) => ({
  hideToast: () => dispatch(clearFeedback()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ToastContainer)
