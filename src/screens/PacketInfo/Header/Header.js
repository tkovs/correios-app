import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, StatusBar } from 'react-native'
import {
  Appbar,
  Menu,
  Portal,
  Dialog,
  Paragraph,
  Button,
} from 'react-native-paper'

import { colors } from '../../../styles/theme'

const Header = ({
  addFeedback,
  archivePacket,
  goBack,
  title,
  removePacket,
}) => {
  const [menuVisible, setMenuVisible] = useState(false)
  const [dialogVisible, setDialogVisible] = useState(false)

  return (
    <Appbar.Header style={styles.header}>
      <Appbar.BackAction onPress={goBack} />
      <StatusBar backgroundColor={colors.blue} />
      <Appbar.Content title={title} subtitle="Informações do envio" />
      <Menu
        visible={menuVisible}
        onDismiss={() => setMenuVisible(false)}
        anchor={
          <Appbar.Action
            color="white"
            icon="dots-vertical"
            onPress={() => setMenuVisible(true)}
          />
        }
      >
        <Menu.Item
          onPress={() => {
            archivePacket()
            setMenuVisible(false)
          }}
          title="Arquivar"
        />
        <Menu.Item
          onPress={() => {
            setMenuVisible(false)
            setDialogVisible(true)
          }}
          title="Excluir"
        />
      </Menu>
      <Portal>
        <Dialog
          visible={dialogVisible}
          onDismiss={() => setDialogVisible(false)}
        >
          <Dialog.Title>Apagar encomenda</Dialog.Title>
          <Dialog.Content>
            <Paragraph>
              Tem certeza que deseja remover esta encomenda?
            </Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setDialogVisible(false)}>Não</Button>
            <Button
              onPress={() => {
                const message = 'Rastreio removido com sucesso'
                removePacket()
                setDialogVisible(false)
                addFeedback(message)
                goBack()
              }}
            >
              Sim
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </Appbar.Header>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.blue,
  },
})

Header.defaultProps = {
  goBack: null,
}

Header.propTypes = {
  addFeedback: PropTypes.func.isRequired,
  archivePacket: PropTypes.func.isRequired,
  goBack: PropTypes.func,
  title: PropTypes.string.isRequired,
  removePacket: PropTypes.func.isRequired,
}

export default Header
