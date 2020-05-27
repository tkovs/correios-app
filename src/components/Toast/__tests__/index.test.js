import React from 'react'
import { act, render, fireEvent } from '@testing-library/react-native'
import { createMockStore } from 'redux-logic-test'

import Toast from '..'
import rootReducer from '../../../store/reducers'
import rootLogic from '../../../store/logic'
import {
  getComponentWithPaper,
  getComponentWithRedux,
} from '../../../utils/jest'
import {
  addFeedback,
  clearFeedback,
  rejectClearFeedback,
} from '../../../store/actions/feedback'

let store = null

describe('Toast component', () => {
  const mockMessage = 'mockMessage'
  const toastDuration = 3000

  jest.useFakeTimers()

  beforeEach(() => {
    store = createMockStore({ logic: rootLogic, reducer: rootReducer })
    store.resetActions()
  })

  it('should react correctly to feedback changes', async () => {
    const { baseElement } = render(
      getComponentWithPaper(getComponentWithRedux(store, <Toast />))
    )

    // Toast should not be visible initially
    expect(baseElement).toMatchSnapshot()
    expect(store.actions.length).toEqual(0)

    // Toast should be visible with a feedback added
    act(() => {
      store.dispatch(addFeedback(mockMessage))
    })
    await store.whenComplete(() => {
      expect(store.actions.length).toEqual(1)
      expect(store.actions[0]).toEqual(addFeedback(mockMessage))
      expect(store.getState().feedback.message).toEqual(mockMessage)
      expect(store.getState().feedback.visible).toEqual(true)
      expect(baseElement).toMatchSnapshot()

      // Toast should not be visible after the feedback was cleaned
      // clearFeedback should be dispatched after the Toast visible duration
      act(() => {
        jest.advanceTimersByTime(toastDuration)
      })
      store.whenComplete(() => {
        expect(store.actions.length).toEqual(2)
        expect(store.actions[1]).toEqual(clearFeedback())
        expect(store.getState().feedback.message).toEqual('')
        expect(store.getState().feedback.visible).toEqual(false)
        expect(baseElement).toMatchSnapshot()
      })
    })
  })

  it('should be invisible and clear the feedback by clicking the Ok! button', async () => {
    const animationTime = 100
    const { baseElement, getByText } = render(
      getComponentWithPaper(getComponentWithRedux(store, <Toast />))
    )

    // Toast should not be visible initially
    expect(baseElement).toMatchSnapshot()
    expect(store.actions.length).toEqual(0)

    // Toast should be visible with a feedback added
    act(() => {
      store.dispatch(addFeedback(mockMessage))
    })
    await store.whenComplete(async () => {
      expect(store.actions.length).toEqual(1)
      expect(store.actions[0]).toEqual(addFeedback(mockMessage))
      expect(store.getState().feedback.message).toEqual(mockMessage)
      expect(store.getState().feedback.visible).toBeTruthy()
      expect(baseElement).toMatchSnapshot()

      // Toast should not be visible after the Ok! button was clicked
      // clearFeedback should be dispatched after the Ok! button was clicked
      act(() => {
        const button = getByText('Ok!')
        fireEvent.press(button)
        jest.advanceTimersByTime(animationTime)
      })
      await store.whenComplete(() => {
        expect(store.actions.length).toEqual(3)
        expect(store.actions[1]).toEqual(clearFeedback())
        expect(store.actions[2]).toEqual(rejectClearFeedback()) // prevent duplicated call
        expect(store.getState().feedback.message).toEqual('')
        expect(store.getState().feedback.visible).toEqual(false)
        expect(baseElement).toMatchSnapshot()
      })
    })
  })
})
