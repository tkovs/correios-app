import * as types from '../actions/packets/types'
import mockPackets from '../../__mocks__/packets'

const initialState = {
  pending: false,
  list: mockPackets,
  error: null,
}

const packets = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_PACKET_PENDING:
      return {
        ...state,
        pending: true,
      }
    case types.ADD_PACKET_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.payload.packet],
        pending: false,
        error: null,
      }
    case types.ADD_PACKET_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload.error,
      }
    case types.REMOVE_PACKET:
      return {
        ...state,
        list: state.list.filter(packet => packet.code !== action.payload.code),
      }
    case types.CLEAR_ERROR:
      return {
        ...state,
        error: null,
      }
    default:
      return state
  }
}

export default packets
