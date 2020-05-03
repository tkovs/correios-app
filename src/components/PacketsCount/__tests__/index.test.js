import 'react-native'
import React from 'react'
import { render } from '@testing-library/react-native'
import { createMockStore } from 'redux-logic-test'

import PacketsCount from '..'
import rootReducer from '../../../store/reducers'
import rootLogic from '../../../store/logic'
import {
  getComponentWithPaper,
  getComponentWithRedux,
} from '../../../utils/jest'
import { addPacketSuccess } from '../../../store/actions/packets'
import { statuses } from '../../../__mocks__/packets'

let store = null

describe('PacketsCount', () => {
  beforeEach(() => {
    store = createMockStore({ logic: rootLogic, reducer: rootReducer })
    store.resetActions()
  })

  const mockTestID = 'mockTestID'

  describe('with quantity 0', () => {
    it('renders correctly', () => {
      const { baseElement } = render(
        getComponentWithPaper(
          getComponentWithRedux(store, <PacketsCount tetsID={mockTestID} />)
        )
      )
      expect(store.getState().packets.list.length).toEqual(0)
      expect(baseElement).toMatchSnapshot()
    })
  })

  describe('with quantity 1', () => {
    it('renders correctly', async () => {
      store.dispatch(addPacketSuccess({ code: 'mockCode', statuses }))

      await store.whenComplete(() => {
        const { baseElement } = render(
          getComponentWithPaper(
            getComponentWithRedux(store, <PacketsCount tetsID={mockTestID} />)
          )
        )
        expect(store.getState().packets.list.length).toEqual(1)
        expect(baseElement).toMatchSnapshot()
      })
    })
  })

  describe('with more quantity than 1', () => {
    it('renders correctly', async () => {
      store.dispatch(addPacketSuccess({ code: 'mockCode1', statuses }))
      store.dispatch(addPacketSuccess({ code: 'mockCode2', statuses }))

      await store.whenComplete(() => {
        const { baseElement } = render(
          getComponentWithPaper(
            getComponentWithRedux(store, <PacketsCount tetsID={mockTestID} />)
          )
        )
        expect(store.getState().packets.list.length).toEqual(2)
        expect(baseElement).toMatchSnapshot()
      })
    })
  })
})
