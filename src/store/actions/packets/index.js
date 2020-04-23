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

export const addPacketFailure = (error, code) => ({
  type: types.ADD_PACKET_FAILURE,
  payload: {
    error,
    code,
  },
})

export const removePacket = code => ({
  type: types.REMOVE_PACKET,
  payload: {
    code,
  },
})

export const clearError = () => ({
  type: types.CLEAR_ERROR,
})
