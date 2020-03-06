import 'react-native'
import React from 'react'
import { render } from '@testing-library/react-native'

import AddPacketModal from '../AddPacketModal'

describe('AddPacketModal', () => {
  it('renders correctly', () => {
    const { baseElement } = render(<AddPacketModal />)
    expect(baseElement).toMatchSnapshot()
  })
})
