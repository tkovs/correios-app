import { connect } from 'react-redux'

import { addPacket } from '../../store/actions/packets'
import AddPacketModal from './AddPacketModal'

const mapDispatchToProps = dispatch => ({
  onSubmit: (title, code) => dispatch(addPacket(title, code)),
})

const mapStateToProps = ({ packets }) => ({
  pending: packets.pending,
  error: packets.error,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPacketModal)
