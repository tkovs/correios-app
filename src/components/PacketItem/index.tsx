import React, { FC } from 'react'
import { connect, MapStateToProps } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import PacketItem from './PacketItem'
import { statusListSelector } from '../../store/selectors/packets'

interface StateProps {
  statusList: StatusListItem[]
}

interface OwnProps {
  packet: Packet
}

type Props = StateProps & OwnProps

const PacketItemContainer: FC<Props> = (props: Props) => {
  const { packet, statusList } = props
  const navigation = useNavigation()

  const navigateToPacketItemInfo: () => void = () =>
    navigation.navigate('PacketInfo', { code: packet.code })

  return (
    <PacketItem
      onClick={navigateToPacketItemInfo}
      packet={packet}
      statusList={statusList}
    />
  )
}

const mapStateToProps: MapStateToProps<StateProps, OwnProps> = (state) => ({
  statusList: statusListSelector(state),
})

PacketItemContainer.defaultProps = {
  statusList: [],
}

export default connect(mapStateToProps)(PacketItemContainer)
