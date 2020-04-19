import { compose } from 'redux'

import { hydrateWithDate } from './datetime'
import { hydrateWithStatus } from './correios'

export const hydratePacket = packet =>
  compose(
    hydrateWithDate,
    hydrateWithStatus
  )(packet)
