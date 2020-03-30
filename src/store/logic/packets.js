import { createLogic } from 'redux-logic'

import * as types from '../actions/packets/types'
import { addPacket } from '../actions/packets'
import mockPackets from '../../__mocks__/packets'

const track = () => {
  return new Promise(resolve => resolve(mockPackets[0].statuses))
}

const fetchPacketLogic = createLogic({
  type: types.FETCH_PACKET,
  process: async ({ action }, dispatch, done) => {
    const { code, title } = action.payload

    const statuses = await track(code)
    const packet = {
      title,
      code,
      mode: 'PAC',
      status: 'delivered',
      statuses,
    }

    dispatch(addPacket(packet))
    done()
  },
})

export default [fetchPacketLogic]
