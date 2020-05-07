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

export const updatePackets = () => ({
  type: types.UPDATE_PACKETS,
})

export const updatePacket = packet => ({
  type: types.UPDATE_PACKET_PENDING,
  payload: {
    packet,
  },
})

export const updatePacketSuccess = packet => ({
  type: types.UPDATE_PACKET_SUCCESS,
  payload: {
    packet,
  },
})

export const updatePacketFailure = (error, code) => ({
  type: types.UPDATE_PACKET_FAILURE,
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

export const archivePacket = code => ({
  type: types.ARCHIVE_PACKET,
  payload: {
    code,
  },
})

export const clearError = () => ({
  type: types.CLEAR_ERROR,
})

export const updateLastView = (date, code) => ({
  type: types.UPDATE_LAST_VIEW,
  payload: {
    date,
    code,
  },
})
