import { createSelector } from 'reselect'
import compact from 'lodash/compact'
import sortBy from 'lodash/sortBy'
import reject from 'lodash/reject'

import { hydratePacket } from '../../utils/packet'

export const packetsSelector = state => state.packets

export const statusListSelector = createSelector(
  packetsSelector,
  packets => packets.statusList
)

export const packetsListSelector = createSelector(
  packetsSelector,
  packets =>
    sortBy(packets.list.map(packet => hydratePacket(packet)), [
      'updatedAt',
      'code',
    ])
)

export const packetsListWithoutArchivedSelector = createSelector(
  packetsListSelector,
  list => reject(list, { archived: true })
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
