import { connect } from 'react-redux'

import { addPacket } from '../../store/actions/packets'
import { statusListSelector } from '../../store/selectors/packets'
import AddPacketModal from './AddPacketModal'

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (title, code) => dispatch(addPacket(title, code)),
})

const mapStateToProps = (state) => ({
  statusList: statusListSelector(state),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddPacketModal)
