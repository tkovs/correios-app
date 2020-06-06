import React, { FC } from 'react'
import { connect, MapDispatchToProps } from 'react-redux'

import Header from './Header'
import { updatePackets as updatePacketsAction } from '../../../store/actions/packets'
import { PacketsActionTypes } from '../../../store/actions/packets/types'

interface DispatchProps {
  updatePackets: () => PacketsActionTypes
}

type Props = DispatchProps

const HeaderContainer: FC<Props> = ({ updatePackets }: Props) => {
  return <Header updatePackets={updatePackets} />
}

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = (
  dispatch
) => ({
  updatePackets: () => dispatch(updatePacketsAction()),
})

export default connect(null, mapDispatchToProps)(HeaderContainer)
