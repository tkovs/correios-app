import { createMockStore, MockStore } from 'redux-logic-test'
import { StandardAction } from 'redux-logic'
import { FeedbackActionTypes } from '../../actions/feedback/types'

import rootReducer from '../../reducers'
import logic from '../feedback'
import {
  addFeedback,
  clearFeedback,
  rejectClearFeedback,
} from '../../actions/feedback'

describe('Feedback Logic', () => {
  let store: MockStore<State, StandardAction>

  beforeEach(() => {
    store = createMockStore<State, FeedbackActionTypes, FeedbackActionTypes>({
      logic,
      reducer: rootReducer,
    })
    store.resetActions()
  })

  describe('clearFeedbackLogic', () => {
    it('should allow clearFeedback if feedback is visible', (done) => {
      const mockMessage = 'mockMessage'

      store.dispatch(addFeedback(mockMessage))
      store.whenComplete(() => {
        expect(store.getState().feedback.message).toEqual(mockMessage)
        expect(store.getState().feedback.visible).toBeTruthy()

        store.dispatch(clearFeedback())
        store.whenComplete(() => {
          expect(store.getState().feedback.message).toEqual('')
          expect(store.getState().feedback.visible).toBeFalsy()
          expect(store.actions).toHaveLength(2)
          expect(store.actions[0]).toEqual(addFeedback(mockMessage))
          expect(store.actions[1]).toEqual(clearFeedback())
          done()
        })
      })
    })

    it('should reject clearFeedback if feedback is not visible', (done) => {
      expect(store.getState().feedback.visible).toBeFalsy()

      store.dispatch(clearFeedback())
      store.whenComplete(() => {
        expect(store.actions).toHaveLength(1)
        expect(store.actions[0]).toEqual(rejectClearFeedback())
        done()
      })
    })
  })
})
