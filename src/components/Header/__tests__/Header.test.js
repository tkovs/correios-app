import 'react-native'
import React from 'react'
import { render } from '@testing-library/react-native'

import Header from '../Header'

describe('Header', () => {
  describe('with title and subtitle', () => {
    it('renders correctly', () => {
      const { baseElement } = render(
        <Header title="Correios" subtitle="Rastreio de pacotes" />
      )
      expect(baseElement).toMatchSnapshot()
    })
  })

  describe('just with title', () => {
    it('renders correctly', () => {
      const { baseElement } = render(<Header title="Correios" />)
      expect(baseElement).toMatchSnapshot()
    })
  })
})
