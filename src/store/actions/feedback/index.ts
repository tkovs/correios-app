import {
  ADD_FEEDBACK,
  CLEAR_FEEDBACK,
  AddFeedback,
  ClearFeedback,
} from './types'

export const clearFeedback = (): ClearFeedback => ({
  type: CLEAR_FEEDBACK,
})

export const addFeedback = (message: string): AddFeedback => ({
  type: ADD_FEEDBACK,
  payload: {
    message,
  },
})
