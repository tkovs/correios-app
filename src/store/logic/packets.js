import { createLogic } from 'redux-logic'
import correios from 'encomendas-correios/lib/index'

import * as types from '../actions/packets/types'
import { addPacket } from '../actions/packets'
import { getShippingWayFromCode } from '../../utils/correios'

const fetchPacketLogic = createLogic({
  type: types.FETCH_PACKET,
  validate: ({ getState, action }, allow, reject) => {
    const { packets } = getState()
    const { code } = action.payload

    const similarPacket = packets.find(packet => packet.code === code)

    if (similarPacket) {
      reject()
    } else {
      allow(action)
    }
  },
  process: async ({ action }, dispatch, done) => {
    const { code, title } = action.payload

    const statuses = await correios.track(code)
    const packet = {
      title,
      code,
      mode: getShippingWayFromCode(code),
      status: 'delivered',
      statuses,
    }

    dispatch(addPacket(packet))
    done()
  },
})

export default [fetchPacketLogic]
