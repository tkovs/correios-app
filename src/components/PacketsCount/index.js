import { connect } from 'react-redux'

import PacketsCount from './PacketsCount'

const mapStateToProps = ({ packets }) => ({
  quantity: packets.length,
})

export default connect(mapStateToProps)(PacketsCount)
