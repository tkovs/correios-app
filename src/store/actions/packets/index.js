import * as types from './types'

export const addPacket = packet => ({
  type: types.ADD_PACKET,
  payload: {
    packet,
  },
})

export const fetchPacket = (title, code) => ({
  type: types.FETCH_PACKET,
  payload: {
    title,
    code,
  },
})
