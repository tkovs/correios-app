import React, { FC } from 'react'
import { connect, MapStateToProps } from 'react-redux'

import PacketList from './PacketList'
import { packetsListWithoutArchivedSelector } from '../../store/selectors/packets'

interface OwnProps {
  filter?: string
}

interface StateProps {
  packets: Packet[]
}

type Props = StateProps & OwnProps

const PacketListContainer: FC<Props> = (props: Props) => {
  const { packets: packetsProp, filter } = props
  const packets = filter
    ? packetsProp.filter((packet) => packet.status === filter)
    : packetsProp

  return <PacketList packets={packets} />
}

const mapStateToProps: MapStateToProps<StateProps, OwnProps, State> = (
  state: State
) => ({
  packets: packetsListWithoutArchivedSelector(state),
})

export default connect(mapStateToProps)(PacketListContainer)
