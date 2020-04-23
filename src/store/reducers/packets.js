import * as types from '../actions/packets/types'
import mockPackets from '../../__mocks__/packets'

const initialState = {
  list: mockPackets,
  statusList: [],
  deleted: null,
}

const packets = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_PACKET_PENDING: {
      const packetStatus = {
        code: action.payload.code,
        pending: true,
        error: null,
      }

      return {
        ...state,
        statusList: [...state.statusList, packetStatus],
        deleted: null,
      }
    }
    case types.ADD_PACKET_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.payload.packet],
        statusList: state.statusList.filter(
          status => status.code !== action.payload.packet.code
        ),
      }
    case types.ADD_PACKET_FAILURE:
      return {
        ...state,
        statusList: [
          ...state.statusList.filter(
            status => status.code !== action.payload.code
          ),
          { code: action.payload.code, error: action.payload.error },
        ],
      }
    case types.REMOVE_PACKET:
      return {
        ...state,
        list: state.list.filter(packet => packet.code !== action.payload.code),
        deleted: state.list.find(packet => packet.code === action.payload.code),
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
