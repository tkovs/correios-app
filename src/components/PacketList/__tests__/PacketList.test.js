import 'react-native'
import React from 'react'
import { render } from '@testing-library/react-native'

import PacketList from '../PacketList'
import mockPackets from '../../../__mocks__/packets.json'

it('renders correctly with packets', () => {
  const { baseElement } = render(<PacketList packets={mockPackets} />)
  expect(baseElement).toMatchSnapshot()
})

it('renders correctly without packets', () => {
  const { baseElement } = render(<PacketList packets={[]} />)
  expect(baseElement).toMatchSnapshot()
})
