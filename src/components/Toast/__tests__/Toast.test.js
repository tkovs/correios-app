import React from 'react'
import { render, act } from '@testing-library/react-native'
import { createMockStore } from 'redux-logic-test'
import rootReducer from '../../../store/reducers'

import { addFeedback, clearFeedback } from '../../../store/actions/feedback'
import Toast from '..'
import { getComponentWithRedux } from '../../../utils/jest'

jest.useFakeTimers()

describe('Toast component', () => {
  const mockMessage = 'mockMessage'
  const toastDuration = 3000

  it('should react correctly to feedback changes', () => {
    const store = createMockStore({ reducer: rootReducer })
    const { baseElement } = render(getComponentWithRedux(store, <Toast />))

    // Should not be visible initially
    expect(baseElement).toMatchSnapshot()

    // Should be visible with a feedback added
    act(() => {
      store.dispatch(addFeedback(mockMessage))
    })
    expect(store.actions.length).toEqual(1)
    expect(baseElement).toMatchSnapshot()

    // Should not be visible after the feedback was cleaned
    act(() => {
      jest.advanceTimersByTime(toastDuration)
    })
    expect(store.actions.length).toEqual(2)
    expect(baseElement).toMatchSnapshot()

    // Check the store actions
    expect(store.actions[0]).toEqual(addFeedback(mockMessage))
    expect(store.actions[1]).toEqual(clearFeedback())
  })
})
