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

const Header = ({ goBack, title }) => {
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
        <Menu.Item onPress={() => {}} title="Editar" />
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
            <Button onPress={() => setDialogVisible(false)}>Sim</Button>
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
  goBack: PropTypes.func,
  title: PropTypes.string.isRequired,
}

export default Header
