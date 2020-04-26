import React from 'react'
import { render } from '@testing-library/react-native'

import PacketTrackingItem from '..'

const mockDatetime = new Date('2020-01-05T00:01:01')
const mockFrom = {
  place: 'AC ASSIS CHATEAUBRIAND',
  city: 'Assis Chateaubriand',
  state: 'PR',
}
const mockTo = {
  place: 'CTCE CURITIBA',
  city: 'Curitiba',
  state: 'PR',
}
const mockLocale = {
  place: 'CTCE CURITIBA',
  city: 'Curitiba',
  state: 'PR',
}

describe('PacketTrackingItem', () => {
  it('should render correctly a posted status', () => {
    const mockStatus = 'Objeto postado após o horário limite da unidade'
    const { baseElement } = render(
      <PacketTrackingItem
        datetime={mockDatetime}
        locale={mockLocale}
        status={mockStatus}
      />
    )
    expect(baseElement).toMatchSnapshot()
  })

  it('should render correctly an on course object', () => {
    const mockStatus = 'Objeto encaminhado'
    const { baseElement } = render(
      <PacketTrackingItem
        datetime={mockDatetime}
        from={mockFrom}
        status={mockStatus}
        to={mockTo}
      />
    )
    expect(baseElement).toMatchSnapshot()
  })

  it('should render correctly a delivered object', () => {
    const mockStatus = 'Objeto entregue ao destinatário'
    const { baseElement } = render(
      <PacketTrackingItem
        datetime={mockDatetime}
        locale={mockLocale}
        status={mockStatus}
      />
    )
    expect(baseElement).toMatchSnapshot()
  })
})
