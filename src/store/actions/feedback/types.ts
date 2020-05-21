const types = {
  ADD_FEEDBACK: 'ADD_FEEDBACK',
  CLEAR_FEEDBACK: 'CLEAR_FEEDBACK',
}
export default types

interface AddFeedback {
  type: typeof types.ADD_FEEDBACK
  payload: {
    message: string
  }
}

interface ClearFeedback {
  type: typeof types.CLEAR_FEEDBACK
}

export type FeedbackActionTypes = AddFeedback | ClearFeedback
