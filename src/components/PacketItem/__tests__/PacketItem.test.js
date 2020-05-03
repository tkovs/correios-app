import React from 'react'
import { act, render } from '@testing-library/react-native'
import { createMockStore } from 'redux-logic-test'

import PacketItem from '..'
import rootReducer from '../../../store/reducers'
import rootLogic from '../../../store/logic'
import {
  getComponentWithRedux,
  getComponentWithPaper,
} from '../../../utils/jest'
import { updatePacket } from '../../../store/actions/packets'

const mockNavigate = jest.fn()

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: mockNavigate,
  }),
}))

const mockStatuses = [
  {
    status: 'Objeto entregue ao destinatário',
    datetime: new Date('2020-01-05T00:01:01'),
    locale: {
      place: 'CEE CENTRO',
      city: 'Rio De Janeiro',
      state: 'RJ',
    },
  },
  {
    status: 'Objeto postado',
    datetime: new Date('2020-01-01T00:01:01'),
    locale: {
      place: 'CEE CENTRO',
      city: 'Rio De Janeiro',
      state: 'RJ',
    },
  },
]

let store = null

describe('PacketItem', () => {
  beforeEach(() => {
    store = createMockStore({ logic: rootLogic, reducer: rootReducer })
    store.resetActions()
  })

  afterAll(() => {
    jest.restoreAllMocks()
  })

  describe('with full packet', () => {
    it('renders correctly', () => {
      const mockPacket = {
        title: 'Apple Pencil',
        status: 'delivered',
        code: 'PW086958115BR',
        mode: 'SEDEX',
        statuses: mockStatuses,
        lastView: new Date(2020, 1, 7),
        lastUpdate: new Date(2020, 1, 6),
      }
      const { baseElement } = render(
        getComponentWithPaper(
          getComponentWithRedux(store, <PacketItem packet={mockPacket} />)
        )
      )
      expect(baseElement).toMatchSnapshot()
    })
  })

  describe('with not viewed packet', () => {
    it('renders correctly', () => {
      const mockPacket = {
        title: 'Apple Pencil',
        status: 'delivered',
        code: 'PW086958115BR',
        mode: 'SEDEX',
        statuses: mockStatuses,
        lastView: new Date(2020, 1, 5),
        lastUpdate: new Date(2020, 1, 6),
      }
      const { baseElement } = render(
        getComponentWithPaper(
          getComponentWithRedux(store, <PacketItem packet={mockPacket} />)
        )
      )
      expect(baseElement).toMatchSnapshot()
    })
  })

  describe('with updating packet', () => {
    it('renders correctly', async () => {
      const mockPacket = {
        title: 'Apple Pencil',
        status: 'delivered',
        code: 'PW086958115BR',
        mode: 'SEDEX',
        statuses: mockStatuses,
        lastView: new Date(2020, 1, 7),
        lastUpdate: new Date(2020, 1, 6),
      }
      act(() => {
        store.dispatch(updatePacket(mockPacket))
      })
      const { baseElement } = render(
        getComponentWithPaper(
          getComponentWithRedux(store, <PacketItem packet={mockPacket} />)
        )
      )
      expect(baseElement).toMatchSnapshot()
    })
  })
})
