import { createSelector } from 'reselect'
import compact from 'lodash/compact'

import { hydratePacket } from '../../utils/packet'

export const packetsSelector = state => state.packets

export const statusListSelector = createSelector(
  packetsSelector,
  packets => packets.statusList
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
