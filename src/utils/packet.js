import { compose } from 'redux'
import isNil from 'lodash/isNil'

import { hydrateWithDate } from './datetime'
import { hydrateWithStatus } from './correios'

export const hydratePacket = packet => {
  if (isNil(packet)) {
    return packet
  }

  return compose(
    hydrateWithDate,
    hydrateWithStatus
  )(packet)
}
