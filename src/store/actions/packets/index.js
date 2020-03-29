import * as types from './types'

export const addPacket = packet => ({
  type: types.ADD_PACKET,
  payload: {
    packet,
  },
})
