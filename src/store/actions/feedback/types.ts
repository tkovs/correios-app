import { StandardAction } from 'redux-logic'

export const ADD_FEEDBACK = 'ADD_FEEDBACK'
export const CLEAR_FEEDBACK = 'CLEAR_FEEDBACK'
export const REJECT_CLEAR_FEEDBACK = 'REJECT_CLEAR_FEEDBACK'

export interface AddFeedback extends StandardAction<typeof ADD_FEEDBACK> {
  payload: {
    message: string
  }
}
export type ClearFeedback = StandardAction<typeof CLEAR_FEEDBACK>
export type RejectClearFeedback = StandardAction<typeof REJECT_CLEAR_FEEDBACK>

export type FeedbackActionTypes =
  | AddFeedback
  | ClearFeedback
  | RejectClearFeedback

export interface FeedbackState {
  message: string
  visible: boolean
}
