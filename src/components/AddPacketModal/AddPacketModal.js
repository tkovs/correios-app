/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { TextInput, HelperText } from 'react-native-paper'
import { View, StyleSheet } from 'react-native'

import Modal from '../Modal'
import { colors } from '../../styles/theme'

function AddPacketModal({ error, pending, visible, onDismiss, onSubmit }) {
  const [title, setTitle] = useState('')
  const [code, setCode] = useState('')

  useEffect(() => {
    if (!pending && !error) {
      onDismiss()
    }
  }, [pending])

  return (
    <Modal
      title="Adicionar novo rastreio"
      visible={visible}
      onSubmit={() => onSubmit(title, code)}
      onDismiss={onDismiss}
      loading={pending}
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
        <HelperText type="error" visible={!!error}>
          {error}
        </HelperText>
      </View>
    </Modal>
  )
}

AddPacketModal.defaultProps = {
  visible: false,
  error: null,
}

AddPacketModal.propTypes = {
  onDismiss: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  pending: PropTypes.bool.isRequired,
  visible: PropTypes.bool,
  error: PropTypes.string,
}

const styles = StyleSheet.create({})

export default AddPacketModal
