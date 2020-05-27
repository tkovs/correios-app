import {
  ADD_FEEDBACK,
  AddFeedback,
  CLEAR_FEEDBACK,
  ClearFeedback,
  REJECT_CLEAR_FEEDBACK,
  RejectClearFeedback,
} from './types'

export const clearFeedback = (): ClearFeedback => ({
  type: CLEAR_FEEDBACK,
})

export const rejectClearFeedback = (): RejectClearFeedback => ({
  type: REJECT_CLEAR_FEEDBACK,
})

export const addFeedback = (message: string): AddFeedback => ({
  type: ADD_FEEDBACK,
  payload: {
    message,
  },
})
