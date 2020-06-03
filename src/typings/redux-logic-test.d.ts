declare module 'redux-logic-test' {
  import { Middleware, Reducer, Store } from 'redux'
  import { StandardAction, Logic, LogicMiddleware } from 'redux-logic'

  type Callback = () => void

  export interface MockStore<
    State extends object,
    Actions extends StandardAction
  > extends Store<State, Actions> {
    dispatch: Dispatch<State>
    getState(): State
    resetActions(): void
    whenComplete(
      callback: Callback
    ): ReturnType<LogicMiddleware['whenComplete']>

    actions: Actions[]
    logicMiddleware: LogicMiddleware
  }

  export interface CreateMockStoreOptions<
    State extends object,
    Dependency extends object
  > {
    initialState?: State
    reducer?: Reducer
    logic?: Logic<State, Dependency>[]
    injectedDeps?: Dependency
    middleware?: Middleware[]
  }

  export interface CreateMockStore {
    <
      State extends object,
      Dependency extends object,
      Actions extends StandardAction
    >(
      options?: CreateMockStoreOptions<State, Dependency>
    ): MockStore<State, Actions>

    <State extends object, Actions extends StandardAction>(
      options?: CreateMockStoreOptions<State, {}>
    ): MockStore<State, Actions>
  }

  export const createMockStore: CreateMockStore
}
