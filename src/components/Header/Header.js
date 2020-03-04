import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, StatusBar } from 'react-native'
import { Appbar } from 'react-native-paper'

import { colors } from '../../styles/theme'

const Header = ({ enableBackButton, goBack, title, subtitle }) => {
  return (
    <Appbar.Header style={styles.header}>
      {enableBackButton && <Appbar.BackAction onPress={goBack} />}
      <StatusBar backgroundColor={colors.blue} />
      <Appbar.Content title={title} subtitle={subtitle} />
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
