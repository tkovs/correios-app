import 'react-native'
import React from 'react'
import { render } from '@testing-library/react-native'

import PacketItem from '../PacketItem'

describe('PacketItem', () => {
  describe('with full packet', () => {
    it('renders correctly', () => {
      const mockPacket = {
        title: 'Apple Pencil',
        status: 'delivered',
        code: 'PW086958115BR',
        mode: 'SEDEX',
        statuses: [
          {
            status: 'Objeto entregue ao destinatário',
            datetime: new Date('2020-01-01T00:01:01'),
            locale: {
              place: 'CEE CENTRO',
              city: 'Rio De Janeiro',
              state: 'RJ',
            },
          },
        ],
      }
      const { baseElement } = render(<PacketItem packet={mockPacket} />)
      expect(baseElement).toMatchSnapshot()
    })
  })
})
