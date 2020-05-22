import {
  ADD_FEEDBACK,
  CLEAR_FEEDBACK,
  FeedbackState,
  FeedbackActionTypes,
} from '../actions/feedback/types'

const initialState: FeedbackState = {
  message: '',
  visible: false,
}

function reducer(
  state: FeedbackState = initialState,
  action: FeedbackActionTypes
): FeedbackState {
  switch (action.type) {
    case CLEAR_FEEDBACK:
      return {
        ...state,
        message: '',
        visible: false,
      }
    case ADD_FEEDBACK:
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
