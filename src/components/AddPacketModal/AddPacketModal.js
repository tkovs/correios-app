import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native-paper'
import Modal from '../Modal'

function AddPacketModal({ visible, onDismiss }) {
  return (
    <Modal
      title="Add a packet"
      visible={visible}
      onSubmit={() => console.log('Add a packet')}
      onDismiss={onDismiss}
    >
      <Text>Add a packet</Text>
    </Modal>
  )
}

AddPacketModal.defaultProps = {
  visible: false,
}

AddPacketModal.propTypes = {
  visible: PropTypes.bool,
  onDismiss: PropTypes.func.isRequired,
}

export default AddPacketModal
