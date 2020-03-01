import 'react-native'
import React from 'react'
import { render } from '@testing-library/react-native'

import PacketsCount from '../PacketsCount'

describe('PacketsCount', () => {
  describe('without quantity', () => {
    it('renders correctly', () => {
      const { baseElement } = render(<PacketsCount />)
      expect(baseElement).toMatchSnapshot()
    })
  })

  describe('with quantity 0', () => {
    it('renders correctly', () => {
      const mockQuantity = 0
      const { baseElement } = render(<PacketsCount quantity={mockQuantity} />)
      expect(baseElement).toMatchSnapshot()
    })
  })

  describe('with quantity 1', () => {
    it('renders correctly', () => {
      const mockQuantity = 1
      const { baseElement } = render(<PacketsCount quantity={mockQuantity} />)
      expect(baseElement).toMatchSnapshot()
    })
  })

  describe('with more quantity than 1', () => {
    it('renders correctly', () => {
      const mockQuantity = 2
      const { baseElement } = render(<PacketsCount quantity={mockQuantity} />)
      expect(baseElement).toMatchSnapshot()
    })
  })
})
