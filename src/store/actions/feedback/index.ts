import types, { FeedbackActionTypes } from './types'

export const clearFeedback = (): FeedbackActionTypes => ({
  type: types.CLEAR_FEEDBACK,
})

export const addFeedback = (message: string): FeedbackActionTypes => ({
  type: types.ADD_FEEDBACK,
  payload: {
    message,
  },
})
