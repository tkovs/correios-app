import 'react-native'
import React from 'react'
import { render } from '@testing-library/react-native'

import App from '../App'

it('renders correctly', () => {
  const { baseElement } = render(<App />)
  expect(baseElement).toMatchSnapshot()
})
