import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import isNil from 'lodash/isNil'
import { TextInput, HelperText } from 'react-native-paper'
import { View, StyleSheet, Keyboard } from 'react-native'
import find from 'lodash/find'

import Modal from '../Modal'
import { colors } from '../../styles/theme'

function AddPacketModal({
  clearError,
  onDismiss,
  onSubmit,
  statusList,
  visible,
}) {
  const [title, setTitle] = useState('')
  const [code, setCode] = useState('')
  const status = find(statusList, { code }) || {}

  useEffect(() => {
    if (!status.pending && !status.error) {
      setTitle('')
      setCode('')
      onDismiss()
    }
  }, [status.pending])

  return (
    <Modal
      title="Adicionar novo rastreio"
      visible={visible}
      onSubmit={() => {
        Keyboard.dismiss()
        onSubmit(title, code)
      }}
      onDismiss={() => {
        clearError()
        setTitle('')
        setCode('')
        onDismiss()
      }}
      loading={status.pending}
      disabled={title === '' || code === '' || status.pending}
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
          onChangeText={value => {
            if (!isNil(status.error)) {
              clearError()
            }
            setTitle(value)
          }}
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
          onChangeText={value => {
            if (!isNil(status.error)) {
              clearError()
            }
            setCode(value)
          }}
        />
        <HelperText type="error" visible={!!status.error}>
          {status.error}
        </HelperText>
      </View>
    </Modal>
  )
}

AddPacketModal.defaultProps = {
  visible: false,
  statusList: [],
}

AddPacketModal.propTypes = {
  clearError: PropTypes.func.isRequired,
  onDismiss: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  visible: PropTypes.bool,
  statusList: PropTypes.arrayOf(PropTypes.object),
}

const styles = StyleSheet.create({})

export default AddPacketModal
