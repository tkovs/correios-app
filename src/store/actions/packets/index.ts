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
  AddPacketPending,
  AddPacketSuccess,
  AddPacketFailure,
  UpdatePackets,
  UpdatePacketPending,
  UpdatePacketSuccess,
  RemovePacket,
  ArchivePacket,
  UpdateLastView,
  UpdatePacketFailure,
} from './types'

export const addPacket = (title: string, code: string): AddPacketPending => ({
  type: ADD_PACKET_PENDING,
  payload: {
    title,
    code,
  },
})

export const addPacketSuccess = (packet: Packet): AddPacketSuccess => ({
  type: ADD_PACKET_SUCCESS,
  payload: {
    packet,
  },
})

export const addPacketFailure = (
  error: string,
  code: string
): AddPacketFailure => ({
  type: ADD_PACKET_FAILURE,
  payload: {
    error,
    code,
  },
})

export const updatePackets = (): UpdatePackets => ({
  type: UPDATE_PACKETS,
})

export const updatePacket = (packet: Packet): UpdatePacketPending => ({
  type: UPDATE_PACKET_PENDING,
  payload: {
    packet,
  },
})

export const updatePacketSuccess = (packet: Packet): UpdatePacketSuccess => ({
  type: UPDATE_PACKET_SUCCESS,
  payload: {
    packet,
  },
})

export const updatePacketFailure = (
  error: string,
  code: string
): UpdatePacketFailure => ({
  type: UPDATE_PACKET_FAILURE,
  payload: {
    error,
    code,
  },
})

export const removePacket = (code: string): RemovePacket => ({
  type: REMOVE_PACKET,
  payload: {
    code,
  },
})

export const archivePacket = (code: string): ArchivePacket => ({
  type: ARCHIVE_PACKET,
  payload: {
    code,
  },
})

export const updateLastView = (date: Date, code: string): UpdateLastView => ({
  type: UPDATE_LAST_VIEW,
  payload: {
    date,
    code,
  },
})
