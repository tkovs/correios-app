import 'react-native'
import React from 'react'
import { render } from '@testing-library/react-native'

import PacketItem from '../PacketItem'

describe('PacketItem', () => {
  describe('without a packet', () => {
    it('renders correctly', () => {
      const mockPacket = null
      const { baseElement } = render(<PacketItem packet={mockPacket} />)
      expect(baseElement).toMatchSnapshot()
    })
  })

  describe('with full packet', () => {
    it('renders correctly', () => {
      const mockPacket = {
        title: 'Apple Pencil',
        status: 'delivered',
        code: 'PW086958115BR',
        mode: 'SEDEX',
        createdAt: '07/02/2020',
        updatedAt: '10/02/2020',
        deliveredAt: '10/02/2020',
      }
      const { baseElement } = render(<PacketItem packet={mockPacket} />)
      expect(baseElement).toMatchSnapshot()
    })
  })
})
