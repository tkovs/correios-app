import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux'
import { PacketsActionTypes } from '../../store/actions/packets/types'

import { addPacket } from '../../store/actions/packets'
import { statusListSelector } from '../../store/selectors/packets'
import AddPacketModal from './AddPacketModal'

interface StateProps {
  statusList: StatusListItem[]
}

interface OwnProps {
  visible: boolean
  onDismiss: Function
}

interface DispatchProps {
  onSubmit: (title: string, code: string) => PacketsActionTypes
}

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = (
  dispatch
) => ({
  onSubmit: (title, code): PacketsActionTypes =>
    dispatch(addPacket(title, code)),
})

const mapStateToProps: MapStateToProps<StateProps, OwnProps, State> = (
  state: State
) => ({
  statusList: statusListSelector(state),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddPacketModal)
