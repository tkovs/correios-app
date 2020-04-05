import * as types from './types'

export const clearFeedback = () => ({
  type: types.CLEAR_FEEDBACK,
})

export const addFeedback = message => ({
  type: types.ADD_FEEDBACK,
  payload: {
    message,
  },
})
