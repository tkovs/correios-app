import { createLogic } from 'redux-logic'
import correios from 'encomendas-correios/lib/index'
import isEmpty from 'lodash/isEmpty'
import find from 'lodash/find'

import {
  ADD_PACKET_PENDING,
  ADD_PACKET_SUCCESS,
  UPDATE_PACKETS,
  UPDATE_PACKET_PENDING,
  ARCHIVE_PACKET,
} from '../actions/packets/types'
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
  type: ADD_PACKET_PENDING,
  validate: ({ getState, action }, allow, reject) => {
    const { list: packets } = getState().packets
    const { code } = action.payload

    const similarPacket = find(packets, { code })

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
        createdAt: new Date(),
        updatedAt: new Date(),
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
  type: ADD_PACKET_SUCCESS,
  process: () => {
    const message = 'Encomenda rastreada com sucesso'
    return addFeedback(message)
  },
})

const updatePacketsLogic = createLogic({
  type: UPDATE_PACKETS,
  process: ({ getState }, dispatch, done) => {
    const packets = packetsListSelector(getState())
    packets.forEach((packet) => dispatch(updatePacket(packet)))
    done()
  },
})

const archivePacketLogic = createLogic({
  type: ARCHIVE_PACKET,
  process: ({ getState, action }, dispatch, done) => {
    const packets = packetsListSelector(getState())
    const { code } = action.payload
    const packet = find(packets, { code })

    if (packet.archived) {
      const message = 'Encomenda arquivada com sucesso'
      dispatch(addFeedback(message))
    }
    done()
  },
})

const updatePacketLogic = createLogic({
  type: UPDATE_PACKET_PENDING,
  process: async ({ action }, dispatch, done) => {
    const { packet } = action.payload

    try {
      const statuses = await correios.track(packet.code)

      if (isEmpty(statuses)) {
        throw new Error('A encomenda não pôde ser rastreada')
      }

      const newPacket = {
        ...packet,
        updatedAt: new Date(),
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
  archivePacketLogic,
  updatePacketLogic,
  updatePacketsLogic,
]
