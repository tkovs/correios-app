import { createLogic } from 'redux-logic'
import correios from 'encomendas-correios/lib/index'
import isEmpty from 'lodash/isEmpty'

import * as types from '../actions/packets/types'
import {
  addPacketFailure,
  addPacketSuccess,
  updatePacket,
  updatePacketSuccess,
  updatePacketFailure,
} from '../actions/packets'
import { addFeedback } from '../actions/feedback'
import { getShippingWayFromCode } from '../../utils/correios'
import { packetsListSelector } from '../selectors/packets'

const addPacketLogic = createLogic({
  type: types.ADD_PACKET_PENDING,
  validate: ({ getState, action }, allow, reject) => {
    const { list: packets } = getState().packets
    const { code } = action.payload

    const similarPacket = packets.find(packet => packet.code === code)

    if (similarPacket) {
      const errorMessage = 'Código de rastreio duplicado'
      reject(addPacketFailure(errorMessage, code))
    } else {
      allow(action)
    }
  },
  process: async ({ action }, dispatch, done) => {
    const { code, title } = action.payload

    try {
      const statuses = await correios.track(code)

      if (isEmpty(statuses)) {
        throw new Error('A encomenda não pôde ser rastreada')
      }

      const packet = {
        code,
        lastUpdate: new Date(),
        mode: getShippingWayFromCode(code),
        statuses,
        title,
      }

      dispatch(addPacketSuccess(packet))
    } catch (error) {
      dispatch(addPacketFailure(error.message, code))
    }
    done()
  },
})

const addPacketSuccessLogic = createLogic({
  type: types.ADD_PACKET_SUCCESS,
  process: () => {
    const message = 'Encomenda rastreada com sucesso'
    return addFeedback(message)
  },
})

const updatePacketsLogic = createLogic({
  type: types.UPDATE_PACKETS,
  process: ({ getState }, dispatch, done) => {
    const packets = packetsListSelector(getState())
    packets.forEach(packet => dispatch(updatePacket(packet)))
    done()
  },
})

const updatePacketLogic = createLogic({
  type: types.UPDATE_PACKET_PENDING,
  process: async ({ action }, dispatch, done) => {
    const { packet } = action.payload

    try {
      const statuses = await correios.track(packet.code)

      if (isEmpty(statuses)) {
        throw new Error('A encomenda não pôde ser rastreada')
      }

      const newPacket = {
        ...packet,
        lastUpdate: new Date(),
        mode: getShippingWayFromCode(packet.code),
        statuses,
      }

      dispatch(updatePacketSuccess(newPacket))
    } catch (error) {
      dispatch(updatePacketFailure(error.message, packet.code))
    }
    done()
  },
})

export default [
  addPacketLogic,
  addPacketSuccessLogic,
  updatePacketLogic,
  updatePacketsLogic,
]
