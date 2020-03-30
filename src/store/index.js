import { createStore, applyMiddleware } from 'redux'
import { createLogicMiddleware } from 'redux-logic'

import rootReducer from './reducers'
import rootLogic from './logic'

export default function configureStore(preloadedState) {
  const logicMiddleware = createLogicMiddleware(rootLogic)
  const middlewares = applyMiddleware(logicMiddleware)
  const store = createStore(rootReducer, preloadedState, middlewares)

  return store
}
