import 'react-native'
import React from 'react'
import { render } from '@testing-library/react-native'

import PacketItem from '../PacketItem'

// TODO: Migrate test to redux

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

describe('PacketItem', () => {
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
      const { baseElement } = render(<PacketItem packet={mockPacket} />)
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
      const { baseElement } = render(<PacketItem packet={mockPacket} />)
      expect(baseElement).toMatchSnapshot()
    })
  })

  describe('with updating packet', () => {
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
      const mockStatusList = [
        {
          code: 'PW086958115BR',
          pending: true,
          error: false,
        },
      ]
      const { baseElement } = render(
        <PacketItem packet={mockPacket} statusList={mockStatusList} />
      )
      expect(baseElement).toMatchSnapshot()
    })
  })
})
