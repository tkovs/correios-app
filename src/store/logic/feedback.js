import { createLogic } from 'redux-logic'

import { CLEAR_FEEDBACK } from '../actions/feedback/types'

const clearFeedbackLogic = createLogic({
  type: CLEAR_FEEDBACK,
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
