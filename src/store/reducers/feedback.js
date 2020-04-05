import * as types from '../actions/feedback/types'

const initialState = {
  message: '',
  visible: false,
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case types.CLEAR_FEEDBACK:
      return {
        ...state,
        message: '',
        visible: false,
      }
    case types.ADD_FEEDBACK:
      return {
        ...state,
        message: action.payload.message,
        visible: true,
      }
    default:
      return state
  }
}

export default reducer
