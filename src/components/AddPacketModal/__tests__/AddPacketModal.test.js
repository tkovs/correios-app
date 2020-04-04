import 'react-native'
import React from 'react'
import { render } from '@testing-library/react-native'

import AddPacketModal from '../AddPacketModal'

const mockOnDismiss = jest.fn()

describe('AddPacketModal', () => {
  it('renders correctly', () => {
    const { baseElement } = render(<AddPacketModal onDismiss={mockOnDismiss} />)
    expect(baseElement).toMatchSnapshot()
  })
})
