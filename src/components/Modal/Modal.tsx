import React, { FC } from 'react'
import { View, StyleSheet } from 'react-native'
import {
  Button,
  Portal,
  Title,
  Modal as ModalPaper,
  Divider,
} from 'react-native-paper'

import { colors } from '../../styles/theme'

interface ModalProps {
  disabled: boolean
  visible: boolean
  loading: boolean
  fullscreen?: boolean
  title?: string
  onDismiss: () => void
  onSubmit: () => void
  children: React.ReactNode
}

type Props = ModalProps

const Modal: FC<Props> = ({
  children,
  disabled,
  fullscreen,
  loading,
  onDismiss,
  onSubmit,
  title,
  visible,
}: Props) => {
  return (
    <Portal>
      <ModalPaper visible={visible} onDismiss={onDismiss}>
        <View
          style={fullscreen ? styles.containerFullscreen : styles.container}
        >
          {title && (
            <View style={styles.header}>
              <Title>{title}</Title>
            </View>
          )}
          <View style={fullscreen ? styles.contentFullscreen : styles.content}>
            {children}
          </View>
          <Divider accessibilityStates={['disabled']} />
          <View style={styles.bottomBar}>
            <View style={styles.cancelButtonView}>
              <Button
                labelStyle={{ color: colors.blue }}
                compact
                onPress={onDismiss}
                accessibilityStates={['disabled']}
              >
                Cancelar
              </Button>
            </View>
            <View>
              <Button
                labelStyle={{ color: colors.snow }}
                loading={loading}
                contentStyle={{ backgroundColor: colors.blue }}
                mode="contained"
                onPress={onSubmit}
                disabled={disabled}
                testID="submit-modal-button"
                accessibilityStates={['disabled']}
              >
                Confirmar
              </Button>
            </View>
          </View>
        </View>
      </ModalPaper>
    </Portal>
  )
}

Modal.defaultProps = {
  disabled: false,
  visible: false,
  loading: false,
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.snow,
    borderRadius: 5,
    marginHorizontal: 32,
  },
  containerFullscreen: {
    backgroundColor: colors.snow,
    height: '100%',
    width: '100%',
  },
  content: {
    paddingHorizontal: 20,
    marginBottom: 8,
  },
  contentFullscreen: {
    paddingHorizontal: 20,
    marginBottom: 8,
    flexGrow: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  bottomBar: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  cancelButtonView: {
    marginRight: 8,
  },
})

export default Modal
