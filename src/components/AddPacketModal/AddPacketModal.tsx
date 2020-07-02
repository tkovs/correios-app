import React, { FC, useState, useEffect } from 'react'
import { TextInput, HelperText } from 'react-native-paper'
import { View, Keyboard } from 'react-native'
import find from 'lodash/find'

import Modal from '../Modal'
import { colors } from '../../styles/theme'
import { PacketsActionTypes } from '../../store/actions/packets/types'

interface AddPacketModalProps {
  onDismiss: Function
  onSubmit: (title: string, code: string) => PacketsActionTypes
  visible: boolean
  statusList: StatusListItem[]
}

type Props = AddPacketModalProps

const AddPacketModal: FC<Props> = ({
  onDismiss,
  onSubmit,
  statusList,
  visible,
}: Props) => {
  const [title, setTitle] = useState('')
  const [code, setCode] = useState('')
  const status = find(statusList, { code })

  useEffect(() => {
    if (!status?.pending && !status?.error) {
      setTitle('')
      setCode('')
      onDismiss()
    }
  }, [onDismiss, status])

  return (
    <Modal
      title="Adicionar novo rastreio"
      visible={visible}
      onSubmit={(): void => {
        Keyboard.dismiss()
        onSubmit(title, code)
      }}
      onDismiss={(): void => {
        setTitle('')
        setCode('')
        onDismiss()
      }}
      loading={status?.pending}
      disabled={title === '' || code === '' || status?.pending}
    >
      <View>
        <TextInput
          theme={{
            colors: { primary: colors.blue },
          }}
          dense
          placeholder="iPad"
          label="Nome do pacote"
          mode="outlined"
          value={title}
          onChangeText={(value: string): void => {
            setTitle(value)
          }}
          testID="title-text-input"
          accessibilityStates={['disabled']}
        />
      </View>
      <View>
        <TextInput
          theme={{
            colors: { primary: colors.blue },
          }}
          autoCapitalize="characters"
          dense
          placeholder="PW086958101BR"
          label="Código de rastreio"
          mode="outlined"
          value={code}
          onChangeText={(value): void => {
            setCode(value)
          }}
          testID="code-text-input"
          accessibilityStates={['disabled']}
        />
        <HelperText type="error" visible={!!status?.error}>
          {status?.error}
        </HelperText>
      </View>
    </Modal>
  )
}

AddPacketModal.defaultProps = {
  visible: false,
  statusList: [],
}

export default AddPacketModal
