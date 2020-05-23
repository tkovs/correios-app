import {
  ADD_PACKET_PENDING,
  ADD_PACKET_SUCCESS,
  ADD_PACKET_FAILURE,
  UPDATE_PACKETS,
  UPDATE_PACKET_PENDING,
  UPDATE_PACKET_SUCCESS,
  UPDATE_PACKET_FAILURE,
  REMOVE_PACKET,
  ARCHIVE_PACKET,
  UPDATE_LAST_VIEW,
  PacketsActionTypes,
} from './types'

export const addPacket = (title: string, code: string): PacketsActionTypes => ({
  type: ADD_PACKET_PENDING,
  payload: {
    title,
    code,
  },
})

export const addPacketSuccess = (packet: Packet): PacketsActionTypes => ({
  type: ADD_PACKET_SUCCESS,
  payload: {
    packet,
  },
})

export const addPacketFailure = (
  error: string,
  code: string
): PacketsActionTypes => ({
  type: ADD_PACKET_FAILURE,
  payload: {
    error,
    code,
  },
})

export const updatePackets = (): PacketsActionTypes => ({
  type: UPDATE_PACKETS,
})

export const updatePacket = (packet: Packet): PacketsActionTypes => ({
  type: UPDATE_PACKET_PENDING,
  payload: {
    packet,
  },
})

export const updatePacketSuccess = (packet: Packet): PacketsActionTypes => ({
  type: UPDATE_PACKET_SUCCESS,
  payload: {
    packet,
  },
})

export const updatePacketFailure = (
  error: string,
  code: string
): PacketsActionTypes => ({
  type: UPDATE_PACKET_FAILURE,
  payload: {
    error,
    code,
  },
})

export const removePacket = (code: string): PacketsActionTypes => ({
  type: REMOVE_PACKET,
  payload: {
    code,
  },
})

export const archivePacket = (code: string): PacketsActionTypes => ({
  type: ARCHIVE_PACKET,
  payload: {
    code,
  },
})

export const updateLastView = (
  date: Date,
  code: string
): PacketsActionTypes => ({
  type: UPDATE_LAST_VIEW,
  payload: {
    date,
    code,
  },
})
