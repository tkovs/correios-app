import 'react-native'
import React from 'react'
import { render } from '@testing-library/react-native'

import Header from '../Header'

const mockAddFeedback = jest.fn()
const mockRemovePacket = jest.fn()
const mockArchivePacket = jest.fn()

// TODO: Migrate test to redux

describe('Header', () => {
  it('renders correctly', () => {
    const mockTitle = 'iPad'
    const { baseElement } = render(
      <Header
        addFeedback={mockAddFeedback}
        archivePacket={mockArchivePacket}
        title={mockTitle}
        removePacket={mockRemovePacket}
      />
    )
    expect(baseElement).toMatchSnapshot()
  })
})
