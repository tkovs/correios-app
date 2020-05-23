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

export interface AddPacketPending {
  type: typeof ADD_PACKET_PENDING
  payload: {
    title: string
    code: string
  }
}

export interface AddPacketSuccess {
  type: typeof ADD_PACKET_SUCCESS
  payload: {
    packet: Packet
  }
}

export interface AddPacketFailure {
  type: typeof ADD_PACKET_FAILURE
  payload: {
    error: string
    code: string
  }
}

export interface UpdatePackets {
  type: typeof UPDATE_PACKETS
}

export interface UpdatePacketPending {
  type: typeof UPDATE_PACKET_PENDING
  payload: {
    packet: Packet
  }
}

export interface UpdatePacketSuccess {
  type: typeof UPDATE_PACKET_SUCCESS
  payload: {
    packet: Packet
  }
}

export interface UpdatePacketFailure {
  type: typeof UPDATE_PACKET_FAILURE
  payload: {
    error: string
    code: string
  }
}

export interface RemovePacket {
  type: typeof REMOVE_PACKET
  payload: {
    code: string
  }
}

export interface ArchivePacket {
  type: typeof ARCHIVE_PACKET
  payload: {
    code: string
  }
}

export interface UpdateLastView {
  type: typeof UPDATE_LAST_VIEW
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
