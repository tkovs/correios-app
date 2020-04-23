import { createSelector } from 'reselect'
import compact from 'lodash/compact'

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

export const deletedPacketSelector = createSelector(
  packetsSelector,
  packets => packets.deleted
)

export const packetsListWithDeletedSelector = createSelector(
  packetsListSelector,
  deletedPacketSelector,
  (packets, deleted) => compact([...packets, hydratePacket(deleted)])
)
