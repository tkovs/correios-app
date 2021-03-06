import { createMockStore, MockStore } from 'redux-logic-test'
import { Action } from 'redux-logic'
import { PacketsActionTypes } from '../../actions/packets/types'

import rootReducer from '../../reducers'
import logic from '../packets'
import { addPacketSuccess, archivePacket } from '../../actions/packets'
import { addFeedback } from '../../actions/feedback'
import mockPackets from '../../../__mocks__/packets'

const mockPacket = mockPackets[0]

describe('Packets Logic', () => {
  let store: MockStore<State, Action>

  beforeEach(() => {
    store = createMockStore<State, PacketsActionTypes, PacketsActionTypes>({
      logic: logic as any, // TODO: fix this any use
      reducer: rootReducer,
    })
    store.resetActions()
  })

  describe('addPacketSuccessLogic', () => {
    it('should dispatch addFeedback action', (done) => {
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

  describe('archivePacketLogic', () => {
    it('should dispatch addFeedback action if packet was archived', (done) => {
      const expectedMessage1 = 'Encomenda rastreada com sucesso'
      const expectedMessage2 = 'Encomenda arquivada com sucesso'

      store.dispatch(addPacketSuccess(mockPacket))
      store.whenComplete(() => {
        expect(store.getState().packets.list[0].code).toEqual(mockPacket.code)
        expect(store.getState().packets.list[0].archived).toBeFalsy()

        store.dispatch(archivePacket(mockPacket.code))
        store.whenComplete(() => {
          expect(store.getState().packets.list[0].code).toEqual(mockPacket.code)
          expect(store.getState().packets.list[0].archived).toBeTruthy()
          expect(store.actions).toHaveLength(4)
          expect(store.actions[0]).toEqual(addPacketSuccess(mockPacket))
          expect(store.actions[1]).toEqual(addFeedback(expectedMessage1))
          expect(store.actions[2]).toEqual(archivePacket(mockPacket.code))
          expect(store.actions[3]).toEqual(addFeedback(expectedMessage2))
          done()
        })
      })
    })
  })
})
