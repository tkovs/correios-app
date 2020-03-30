/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { TextInput } from 'react-native-paper'
import { View, StyleSheet } from 'react-native'

import Modal from '../Modal'
import { colors } from '../../styles/theme'

function AddPacketModal({ visible, onDismiss, onSubmit }) {
  const [title, setTitle] = useState('')
  const [code, setCode] = useState('')

  return (
    <Modal
      title="Adicionar novo rastreio"
      visible={visible}
      onSubmit={() => onSubmit(title, code)}
      onDismiss={onDismiss}
    >
      <View style={styles.textInputContainer}>
        <TextInput
          theme={{
            colors: { primary: colors.blue, underlineColor: 'transparent' },
          }}
          dense
          placeholder="iPad"
          label="Nome do pacote"
          mode="outlined"
          value={title}
          onChangeText={value => setTitle(value)}
        />
      </View>
      <View>
        <TextInput
          theme={{
            colors: { primary: colors.blue, underlineColor: 'transparent' },
          }}
          autoCapitalize="characters"
          dense
          placeholder="PW086958101BR"
          label="Código de rastreio"
          mode="outlined"
          value={code}
          onChangeText={value => setCode(value)}
        />
      </View>
    </Modal>
  )
}

AddPacketModal.defaultProps = {
  visible: false,
}

AddPacketModal.propTypes = {
  visible: PropTypes.bool,
  onDismiss: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({})

export default AddPacketModal
