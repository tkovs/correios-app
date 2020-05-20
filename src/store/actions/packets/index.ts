import types, { PacketActionTypes } from './types'

export const addPacket = (title: string, code: string): PacketActionTypes => ({
  type: types.ADD_PACKET_PENDING,
  payload: {
    title,
    code,
  },
})

export const addPacketSuccess = (packet: Packet): PacketActionTypes => ({
  type: types.ADD_PACKET_SUCCESS,
  payload: {
    packet,
  },
})

export const addPacketFailure = (
  error: string,
  code: string
): PacketActionTypes => ({
  type: types.ADD_PACKET_FAILURE,
  payload: {
    error,
    code,
  },
})

export const updatePackets = (): PacketActionTypes => ({
  type: types.UPDATE_PACKETS,
})

export const updatePacket = (packet: Packet): PacketActionTypes => ({
  type: types.UPDATE_PACKET_PENDING,
  payload: {
    packet,
  },
})

export const updatePacketSuccess = (packet: Packet): PacketActionTypes => ({
  type: types.UPDATE_PACKET_SUCCESS,
  payload: {
    packet,
  },
})

export const updatePacketFailure = (
  error: string,
  code: string
): PacketActionTypes => ({
  type: types.UPDATE_PACKET_FAILURE,
  payload: {
    error,
    code,
  },
})

export const removePacket = (code: string): PacketActionTypes => ({
  type: types.REMOVE_PACKET,
  payload: {
    code,
  },
})

export const archivePacket = (code: string): PacketActionTypes => ({
  type: types.ARCHIVE_PACKET,
  payload: {
    code,
  },
})

export const clearError = (): PacketActionTypes => ({
  type: types.CLEAR_ERROR,
})

export const updateLastView = (
  date: Date,
  code: string
): PacketActionTypes => ({
  type: types.UPDATE_LAST_VIEW,
  payload: {
    date,
    code,
  },
})
