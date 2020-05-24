import reject from 'lodash/reject'
import find from 'lodash/find'
import concat from 'lodash/concat'
import merge from 'lodash/merge'

import {
  ADD_PACKET_PENDING,
  ADD_PACKET_SUCCESS,
  ADD_PACKET_FAILURE,
  UPDATE_PACKET_PENDING,
  UPDATE_PACKET_SUCCESS,
  UPDATE_PACKET_FAILURE,
  REMOVE_PACKET,
  ARCHIVE_PACKET,
  UPDATE_LAST_VIEW,
  PacketsActionTypes,
  PacketsState,
} from '../actions/packets/types'

const initialState = {
  list: [],
  statusList: [],
  deleted: undefined,
}

const packets = (
  state: PacketsState = initialState,
  action: PacketsActionTypes
): PacketsState => {
  switch (action.type) {
    case ADD_PACKET_PENDING: {
      const packetStatus: StatusListItem = {
        code: action.payload.code,
        pending: true,
        error: undefined,
      }

      return {
        ...state,
        statusList: [...state.statusList, packetStatus],
        deleted: undefined,
      }
    }
    case UPDATE_PACKET_PENDING: {
      const packetStatus: StatusListItem = {
        code: action.payload.packet.code,
        pending: true,
        error: undefined,
      }

      return {
        ...state,
        statusList: [...state.statusList, packetStatus],
        deleted: undefined,
      }
    }
    case ADD_PACKET_SUCCESS: {
      const { code } = action.payload.packet

      return {
        ...state,
        list: [...state.list, action.payload.packet],
        statusList: reject(state.statusList, { code }),
      }
    }
    case ADD_PACKET_FAILURE:
    case UPDATE_PACKET_FAILURE: {
      const { code, error } = action.payload

      return {
        ...state,
        statusList: concat(reject(state.statusList, { code }), {
          code,
          error,
          pending: false,
        }),
      }
    }
    case UPDATE_PACKET_SUCCESS: {
      const { code } = action.payload.packet

      return {
        ...state,
        list: [...reject(state.list, { code }), action.payload.packet],
        statusList: reject(state.statusList, { code }),
      }
    }
    case ARCHIVE_PACKET: {
      const { code } = action.payload

      return {
        ...state,
        list: concat(
          reject(state.list, { code }),
          merge(find(state.list, { code }), { archived: true })
        ),
      }
    }
    case REMOVE_PACKET: {
      const { code } = action.payload

      return {
        ...state,
        list: reject(state.list, { code }),
        deleted: find(state.list, { code }),
      }
    }
    case UPDATE_LAST_VIEW: {
      const { code, date } = action.payload

      return {
        ...state,
        list: concat(
          reject(state.list, { code }),
          merge(find(state.list, { code }), { lastView: date })
        ),
      }
    }
    default:
      return state
  }
}

export default packets
