import React from 'react'
import { render } from '@testing-library/react-native'

import Toast from '../Toast'

const mockDuration = 2000
const mockMessage = 'message'

jest.useFakeTimers()

describe('Toast component', () => {
  it('should not be visible and should not call onDismiss', () => {
    const mockVisible = false
    const mockOnDismiss = jest.fn()

    const { baseElement } = render(
      <Toast
        duration={mockDuration}
        message={mockMessage}
        onDismiss={mockOnDismiss}
        visible={mockVisible}
      />
    )

    expect(baseElement).toMatchSnapshot()

    expect(mockOnDismiss).not.toHaveBeenCalled()
    jest.advanceTimersByTime(2000)
    expect(mockOnDismiss).not.toHaveBeenCalled()
  })

  it('should be visible and acll onDismiss after duration', () => {
    const mockVisible = true
    const mockOnDismiss = jest.fn()

    const { baseElement } = render(
      <Toast
        duration={mockDuration}
        message={mockMessage}
        onDismiss={mockOnDismiss}
        visible={mockVisible}
      />
    )

    expect(baseElement).toMatchSnapshot()

    expect(mockOnDismiss).not.toHaveBeenCalled()
    jest.advanceTimersByTime(2000)
    expect(mockOnDismiss).toHaveBeenCalledTimes(1)
  })
})
