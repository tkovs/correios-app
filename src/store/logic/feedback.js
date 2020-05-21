import { createLogic } from 'redux-logic'

import types from '../actions/feedback/types'

const clearFeedbackLogic = createLogic({
  type: types.CLEAR_FEEDBACK,
  validate: ({ getState, action }, allow, reject) => {
    const { message, visible } = getState().feedback

    if (message !== '' || visible === true) {
      allow(action)
    } else {
      reject()
    }
  },
})

export default [clearFeedbackLogic]
