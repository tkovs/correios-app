import { connect } from 'react-redux'

import PacketList from './PacketList'

const mapStateToProps = ({ packets }) => ({
  packets,
})

export default connect(mapStateToProps)(PacketList)
