import * as types from '../actions/packets/types'

const initialState = []

const packets = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_PACKET:
      return [...state, action.payload.packet]
    default:
      return state
  }
}

export default packets
