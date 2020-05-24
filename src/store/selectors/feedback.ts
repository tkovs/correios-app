import { createSelector } from 'reselect'

import { FeedbackState } from '../actions/feedback/types'

export const feedbackSelector = (state: State): FeedbackState => state.feedback

export const messageSelector = createSelector(
  feedbackSelector,
  (feedback) => feedback.message
)

export const visibleSelector = createSelector(
  feedbackSelector,
  (feedback) => feedback.visible
)
