import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, StatusBar } from 'react-native'
import { Appbar } from 'react-native-paper'

import { colors } from '../../../styles/theme'

const Header = ({ updatePackets }) => {
  return (
    <Appbar.Header style={styles.header}>
      <StatusBar backgroundColor={colors.blue} />
      <Appbar.Content title="Correios" subtitle="Rastreio de pacotes" />
      <Appbar.Action icon="refresh" onPress={updatePackets} />
    </Appbar.Header>
  )
}

Header.propTypes = {
  updatePackets: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.blue,
  },
})

export default Header
