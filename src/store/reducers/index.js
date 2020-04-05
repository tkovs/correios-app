import { combineReducers } from 'redux'

import feedback from './feedback'
import packets from './packets'

export default combineReducers({
  feedback,
  packets,
})
