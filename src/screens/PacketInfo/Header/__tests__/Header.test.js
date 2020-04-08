import 'react-native'
import React from 'react'
import { render } from '@testing-library/react-native'

import Header from '../Header'

const mockAddFeedback = jest.fn()
const mockRemovePacket = jest.fn()

describe('Header', () => {
  it('renders correctly', () => {
    const mockTitle = 'iPad'
    const { baseElement } = render(
      <Header
        addFeedback={mockAddFeedback}
        title={mockTitle}
        removePacket={mockRemovePacket}
      />
    )
    expect(baseElement).toMatchSnapshot()
  })
})
