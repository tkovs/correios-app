import { createLogic } from 'redux-logic'

import { CLEAR_FEEDBACK } from '../actions/feedback/types'
import { rejectClearFeedback } from '../actions/feedback'

const clearFeedbackLogic = createLogic<State>({
  type: CLEAR_FEEDBACK,
  validate: ({ getState, action }, allow, reject) => {
    const { message, visible } = getState().feedback

    if (message === '' && !visible) {
      reject(rejectClearFeedback())
    }

    allow(action)
  },
})

export default [clearFeedbackLogic]
