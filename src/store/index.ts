import { createStore, applyMiddleware, Store } from 'redux'
import { createLogicMiddleware } from 'redux-logic'

import rootReducer from './reducers'
import rootLogic from './logic'

export default function configureStore(preloadedState: State): Store<State> {
  const logicMiddleware = createLogicMiddleware(rootLogic as any) // TODO: Fix this any use
  const middlewares = applyMiddleware(logicMiddleware)
  const store = createStore(rootReducer, preloadedState, middlewares)

  return store
}
