import { createSelector } from 'reselect'

import { hydratePacket } from '../../utils/packet'

export const packetsSelector = state => state.packets

export const errorSelector = createSelector(
  packetsSelector,
  packets => packets.error
)

export const pendingSelector = createSelector(
  packetsSelector,
  packets => packets.pending
)

export const packetsListSelector = createSelector(
  packetsSelector,
  packets => packets.list.map(packet => hydratePacket(packet))
)
