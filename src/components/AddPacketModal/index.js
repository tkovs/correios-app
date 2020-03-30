import { connect } from 'react-redux'

import { fetchPacket } from '../../store/actions/packets'
import AddPacketModal from './AddPacketModal'

const mapDispatchToProps = dispatch => ({
  onSubmit: (title, code) => dispatch(fetchPacket(title, code)),
})

export default connect(
  null,
  mapDispatchToProps
)(AddPacketModal)
