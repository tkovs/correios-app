import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, StatusBar } from 'react-native'
import { Appbar, Menu } from 'react-native-paper'

import { colors } from '../../../styles/theme'

const Header = ({ goBack, title }) => {
  const [menuVisible, setMenuVisible] = useState(false)

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
        <Menu.Item onPress={() => {}} title="Excluir" />
      </Menu>
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
