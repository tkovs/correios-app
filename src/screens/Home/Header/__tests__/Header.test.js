import 'react-native'
import React from 'react'
import { render } from '@testing-library/react-native'

import Header from '../Header'

describe('Header', () => {
  it('renders correctly', () => {
    const { baseElement } = render(<Header title="iPad" />)
    expect(baseElement).toMatchSnapshot()
  })
})
