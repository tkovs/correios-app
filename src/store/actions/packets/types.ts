const types = {
  ADD_PACKET_PENDING: 'ADD_PACKET_PENDING',
  ADD_PACKET_SUCCESS: 'ADD_PACKET_SUCCESS',
  ADD_PACKET_FAILURE: 'ADD_PACKET_FAILURE',
  UPDATE_PACKETS: 'UPDATE_PACKETS',
  UPDATE_PACKET_PENDING: 'UPDATE_PACKET_PENDING',
  UPDATE_PACKET_SUCCESS: 'UPDATE_PACKET_SUCCESS',
  UPDATE_PACKET_FAILURE: 'UPDATE_PACKET_FAILURE',
  ARCHIVE_PACKET: 'ARCHIVE_PACKET',
  REMOVE_PACKET: 'REMOVE_PACKET',
  CLEAR_ERROR: 'CLEAR_ERROR',
  UPDATE_LAST_VIEW: 'UPDATE_LAST_VIEW',
}
export default types

interface AddPacketPending {
  type: typeof types.ADD_PACKET_PENDING
  payload: {
    title: string
    code: string
  }
}

interface AddPacketSuccess {
  type: typeof types.ADD_PACKET_SUCCESS
  payload: {
    packet: Packet
  }
}

interface AddPacketFailure {
  type: typeof types.ADD_PACKET_FAILURE
  payload: {
    error: string
    code: string
  }
}

interface UpdatePackets {
  type: typeof types.UPDATE_PACKETS
}

interface UpdatePacketPending {
  type: typeof types.UPDATE_PACKET_PENDING
  payload: {
    packet: Packet
  }
}

interface UpdatePacketSuccess {
  type: typeof types.UPDATE_PACKET_SUCCESS
  payload: {
    packet: Packet
  }
}

interface UpdatePacketFailure {
  type: typeof types.UPDATE_PACKET_FAILURE
  payload: {
    error: string
    code: string
  }
}

interface RemovePacket {
  type: typeof types.REMOVE_PACKET
  payload: {
    code: string
  }
}

interface ArchivePacket {
  type: typeof types.ARCHIVE_PACKET
  payload: {
    code: string
  }
}

interface ClearError {
  type: typeof types.CLEAR_ERROR
}

interface UpdateLastView {
  type: typeof types.UPDATE_LAST_VIEW
  payload: {
    code: string
    date: Date
  }
}

export type PacketActionTypes =
  | AddPacketPending
  | AddPacketSuccess
  | AddPacketFailure
  | UpdatePackets
  | UpdatePacketPending
  | UpdatePacketSuccess
  | UpdatePacketFailure
  | RemovePacket
  | ArchivePacket
  | ClearError
  | UpdateLastView
