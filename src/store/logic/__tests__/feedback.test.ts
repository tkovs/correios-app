import { createMockStore, MockStore } from 'redux-logic-test'
import { Action } from 'redux-logic'

import rootReducer from '../../reducers'
import feedback from '../feedback'
import { addFeedback, clearFeedback } from '../../actions/feedback'

let store: MockStore<State, Action>

describe('Feedback Logic', () => {
  beforeEach(() => {
    store = createMockStore({ logic: [...feedback], reducer: rootReducer })
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
        expect(store.actions).toHaveLength(0)
        done()
      })
    })
  })
})
