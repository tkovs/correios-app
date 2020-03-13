import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, StatusBar } from 'react-native'
import { Appbar, Menu } from 'react-native-paper'

import { colors } from '../../styles/theme'

const Header = ({ enableBackButton, goBack, title, subtitle }) => {
  const [menuVisible, setMenuVisible] = useState(false)

  return (
    <Appbar.Header style={styles.header}>
      {enableBackButton && <Appbar.BackAction onPress={goBack} />}
      <StatusBar backgroundColor={colors.blue} />
      <Appbar.Content title={title} subtitle={subtitle} />
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
  enableBackButton: false,
  goBack: null,
  subtitle: null,
}

Header.propTypes = {
  enableBackButton: PropTypes.bool,
  goBack: PropTypes.func,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
}

export default Header
