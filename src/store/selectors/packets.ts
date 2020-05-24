import { createSelector } from 'reselect'
import compact from 'lodash/compact'
import sortBy from 'lodash/sortBy'
import reject from 'lodash/reject'

import { PacketsState } from '../actions/packets/types'
import { hydratePacket } from '../../utils/packet'

export const packetsSelector = (state: State): PacketsState => state.packets

export const statusListSelector = createSelector(
  packetsSelector,
  (packets: PacketsState) => packets.statusList
)

export const packetsListSelector = createSelector(
  packetsSelector,
  (packets: PacketsState) =>
    sortBy(
      packets.list.map((packet: Packet) => hydratePacket(packet)),
      ['updatedAt', 'code']
    )
)

export const packetsListWithoutArchivedSelector = createSelector(
  packetsListSelector,
  (list: Packet[]) => reject(list, { archived: true })
)

export const deletedPacketSelector = createSelector(
  packetsSelector,
  (packets: PacketsState) => packets.deleted
)

export const packetsListWithDeletedSelector = createSelector(
  packetsListSelector,
  deletedPacketSelector,
  (packets: Packet[], deleted: Packet | undefined) =>
    compact([...packets, hydratePacket(deleted)])
)
