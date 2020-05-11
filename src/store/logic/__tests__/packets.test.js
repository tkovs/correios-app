import { createMockStore } from 'redux-logic-test'

import rootReducer from '../../reducers'
import packetsLogic from '../packets'
import { addPacketSuccess } from '../../actions/packets'
import { addFeedback } from '../../actions/feedback'

const mockPacket = {
  title: 'iPhone 7',
  code: 'PW086958109BR',
  mode: 'SEDEX',
  statuses: [],
  createdAt: new Date(2020, 2, 2, 9, 5),
  lastView: new Date(2020, 2, 4, 18, 13),
  updatedAt: new Date(2020, 2, 3, 18, 13),
}

describe('Packets Logic', () => {
  let store = null

  beforeEach(() => {
    store = createMockStore({ logic: [...packetsLogic], reducer: rootReducer })
    store.resetActions()
  })

  describe('addPacketSuccessLogic', () => {
    it('should dispatch addFeedback action', done => {
      const expectedMessage = 'Encomenda rastreada com sucesso'

      store.dispatch(addPacketSuccess(mockPacket))
      store.whenComplete(() => {
        expect(store.getState().feedback.message).toEqual(expectedMessage)
        expect(store.getState().feedback.visible).toBeTruthy()
        expect(store.getState().packets.list[0].code).toEqual(mockPacket.code)
        expect(store.actions).toHaveLength(2)
        expect(store.actions[0]).toEqual(addPacketSuccess(mockPacket))
        expect(store.actions[1]).toEqual(addFeedback(expectedMessage))
        done()
      })
    })
  })
})
