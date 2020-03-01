import React from 'react'
import { View, StyleSheet } from 'react-native'
import {
  Button,
  Portal,
  Title,
  Modal as ModalPaper,
  Divider,
} from 'react-native-paper'
import PropTypes from 'prop-types'

import { colors } from '../../styles/theme'

function Modal({ children, onSubmit, title, fullscreen, visible, onDismiss }) {
  return (
    <Portal>
      <ModalPaper visible={visible} onDismiss={onDismiss}>
        <View
          style={fullscreen ? styles.containerFullscreen : styles.container}
        >
          {title && (
            <View style={styles.header}>
              <Title style={styles.headerText}>{title}</Title>
            </View>
          )}
          <View style={fullscreen ? styles.contentFullscreen : styles.content}>
            {children}
          </View>
          <Divider />
          <View style={styles.bottomBar}>
            <View style={styles.cancelButtonView}>
              <Button
                labelStyle={{ color: colors.blue }}
                compact
                onPress={onDismiss}
              >
                Cancelar
              </Button>
            </View>
            <View>
              <Button
                labelStyle={{ color: colors.snow }}
                contentStyle={{ backgroundColor: colors.blue }}
                mode="contained"
                onPress={onSubmit}
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
  visible: false,
  title: null,
  onSubmit: null,
  fullscreen: false,
}

Modal.propTypes = {
  visible: PropTypes.bool,
  fullscreen: PropTypes.bool,
  title: PropTypes.string,
  onDismiss: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
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
