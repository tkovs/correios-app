import { Action } from 'redux'

export const ADD_FEEDBACK = 'ADD_FEEDBACK'
export const CLEAR_FEEDBACK = 'CLEAR_FEEDBACK'
export const REJECT_CLEAR_FEEDBACK = 'REJECT_CLEAR_FEEDBACK'

export interface AddFeedback extends Action<typeof ADD_FEEDBACK> {
  payload: {
    message: string
  }
}
export type ClearFeedback = Action<typeof CLEAR_FEEDBACK>
export type RejectClearFeedback = Action<typeof REJECT_CLEAR_FEEDBACK>
export type FeedbackActionTypes = AddFeedback | ClearFeedback

export interface FeedbackState {
  message: string
  visible: boolean
}
