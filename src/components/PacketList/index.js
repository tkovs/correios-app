import { connect } from 'react-redux'

import PacketList from './PacketList'

const mapStateToProps = ({ packets }) => ({
  packets: packets.list,
})

export default connect(mapStateToProps)(PacketList)
