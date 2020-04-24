import 'react-native'
import React from 'react'
import { render } from '@testing-library/react-native'

import PacketList from '../PacketList'
import mockPackets from '../../../__mocks__/packets'
import { hydratePacket } from '../../../utils/packet'

jest.mock('@react-navigation/native')

it.skip('renders correctly with packets', () => {
  const { baseElement } = render(
    <PacketList packets={mockPackets.map(packet => hydratePacket(packet))} />
  )
  expect(baseElement).toMatchSnapshot()
})

it('renders correctly without packets', () => {
  const { baseElement } = render(<PacketList packets={[]} />)
  expect(baseElement).toMatchSnapshot()
})
