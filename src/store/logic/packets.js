import { createLogic } from 'redux-logic'
import correios from 'encomendas-correios/lib/index'
import isEmpty from 'lodash/isEmpty'

import * as types from '../actions/packets/types'
import { addPacketFailure, addPacketSuccess } from '../actions/packets'
import { addFeedback } from '../actions/feedback'
import { getShippingWayFromCode } from '../../utils/correios'

const addPacketLogic = createLogic({
  type: types.ADD_PACKET_PENDING,
  validate: ({ getState, action }, allow, reject) => {
    const { list: packets } = getState().packets
    const { code } = action.payload

    const similarPacket = packets.find(packet => packet.code === code)

    if (similarPacket) {
      const errorMessage = 'Código de rastreio duplicado'
      reject(addPacketFailure(errorMessage))
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
        mode: getShippingWayFromCode(code),
        statuses,
        title,
      }

      dispatch(addPacketSuccess(packet))
    } catch (error) {
      dispatch(addPacketFailure(error.message))
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

export default [addPacketLogic, addPacketSuccessLogic]
