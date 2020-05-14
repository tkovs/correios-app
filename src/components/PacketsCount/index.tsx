import React, { FC } from 'react'
import { connect, MapStateToProps } from 'react-redux'

import PacketsCount from './PacketsCount'
import { packetsListWithoutArchivedSelector } from '../../store/selectors/packets'
import { Packet } from '../../types/Packet'

interface StateProps {
  packets: Packet[]
}

interface OwnProps {
  filter: string
  testID: string
}

type Props = StateProps & OwnProps

const PacketsCountContainer: FC<Props> = ({
  packets,
  filter,
  testID,
}: Props) => {
  const quantity = filter
    ? packets.filter((packet: Packet) => packet.status === filter).length
    : packets.length

  return <PacketsCount quantity={quantity} testID={testID} />
}

const mapStateToProps: MapStateToProps<StateProps, OwnProps> = (state) => ({
  packets: packetsListWithoutArchivedSelector(state),
})

export default connect(mapStateToProps)(PacketsCountContainer)
