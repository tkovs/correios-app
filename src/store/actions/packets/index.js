import * as types from './types'

export const addPacket = (title, code) => ({
  type: types.ADD_PACKET_PENDING,
  payload: {
    title,
    code,
  },
})

export const addPacketSuccess = packet => ({
  type: types.ADD_PACKET_SUCCESS,
  payload: {
    packet,
  },
})

export const addPacketFailure = error => ({
  type: types.ADD_PACKET_FAILURE,
  payload: {
    error,
  },
})

export const clearError = () => ({
  type: types.CLEAR_ERROR,
})
