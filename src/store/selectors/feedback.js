import { createSelector } from 'reselect'

export const feedbackSelector = state => state.feedback

export const messageSelector = createSelector(
  feedbackSelector,
  feedback => feedback.message
)

export const visibleSelector = createSelector(
  feedbackSelector,
  feedback => feedback.visible
)
