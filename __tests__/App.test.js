import 'react-native'
import React from 'react'
import { render } from '@testing-library/react-native'

import App from '../App'

it('renders correctly', () => {
  const container = render(<App />)
  expect(container).toMatchSnapshot()
  expect(1).toEqual(1)
})
