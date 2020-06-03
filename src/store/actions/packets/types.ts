import { StandardAction } from 'redux-logic'

export const ADD_PACKET_PENDING = 'ADD_PACKET_PENDING'
export const ADD_PACKET_SUCCESS = 'ADD_PACKET_SUCCESS'
export const ADD_PACKET_FAILURE = 'ADD_PACKET_FAILURE'
export const UPDATE_PACKETS = 'UPDATE_PACKETS'
export const UPDATE_PACKET_PENDING = 'UPDATE_PACKET_PENDING'
export const UPDATE_PACKET_SUCCESS = 'UPDATE_PACKET_SUCCESS'
export const UPDATE_PACKET_FAILURE = 'UPDATE_PACKET_FAILURE'
export const ARCHIVE_PACKET = 'ARCHIVE_PACKET'
export const REMOVE_PACKET = 'REMOVE_PACKET'
export const UPDATE_LAST_VIEW = 'UPDATE_LAST_VIEW'

export interface AddPacketPending
  extends StandardAction<typeof ADD_PACKET_PENDING> {
  payload: {
    title: string
    code: string
  }
}

export interface AddPacketSuccess
  extends StandardAction<typeof ADD_PACKET_SUCCESS> {
  payload: {
    packet: Packet
  }
}

export interface AddPacketFailure
  extends StandardAction<typeof ADD_PACKET_FAILURE> {
  payload: {
    error: string
    code: string
  }
}

export type UpdatePackets = StandardAction<typeof UPDATE_PACKETS>

export interface UpdatePacketPending
  extends StandardAction<typeof UPDATE_PACKET_PENDING> {
  payload: {
    packet: Packet
  }
}

export interface UpdatePacketSuccess
  extends StandardAction<typeof UPDATE_PACKET_SUCCESS> {
  payload: {
    packet: Packet
  }
}

export interface UpdatePacketFailure
  extends StandardAction<typeof UPDATE_PACKET_FAILURE> {
  payload: {
    error: string
    code: string
  }
}

export interface RemovePacket extends StandardAction<typeof REMOVE_PACKET> {
  payload: {
    code: string
  }
}

export interface ArchivePacket extends StandardAction<typeof ARCHIVE_PACKET> {
  payload: {
    code: string
  }
}

export interface UpdateLastView
  extends StandardAction<typeof UPDATE_LAST_VIEW> {
  payload: {
    code: string
    date: Date
  }
}

export type PacketsActionTypes =
  | AddPacketPending
  | AddPacketSuccess
  | AddPacketFailure
  | UpdatePackets
  | UpdatePacketPending
  | UpdatePacketSuccess
  | UpdatePacketFailure
  | RemovePacket
  | ArchivePacket
  | UpdateLastView

export interface PacketsState {
  list: Packet[]
  statusList: StatusListItem[]
  deleted?: Packet
}
