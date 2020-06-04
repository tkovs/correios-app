import React, { FC } from 'react'
import { Snackbar } from 'react-native-paper'
import { FeedbackActionTypes } from '../../store/actions/feedback/types'

interface ToastProps {
  duration: number
  message: string
  visible: boolean
  onDismiss: () => FeedbackActionTypes
}

type Props = ToastProps

const Toast: FC<Props> = ({ duration, message, onDismiss, visible }: Props) => (
  <Snackbar
    action={{
      label: 'Ok!',
      onPress: onDismiss,
    }}
    visible={visible}
    onDismiss={onDismiss}
    duration={duration}
    accessibilityStates={['disabled']}
  >
    {message}
  </Snackbar>
)

export default Toast
