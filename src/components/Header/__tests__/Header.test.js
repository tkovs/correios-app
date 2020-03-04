import 'react-native'
import React from 'react'
import { render } from '@testing-library/react-native'

import Header from '../Header'

it('renders correctly', () => {
  const { baseElement } = render(
    <Header title="Correios" subtitle="Rastreio de pacotes" />
  )
  expect(baseElement).toMatchSnapshot()
})
