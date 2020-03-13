import React from 'react'
import { StyleSheet, StatusBar } from 'react-native'
import { Appbar } from 'react-native-paper'

import { colors } from '../../../styles/theme'

const Header = () => {
  return (
    <Appbar.Header style={styles.header}>
      <StatusBar backgroundColor={colors.blue} />
      <Appbar.Content title="Correios" subtitle="Rastreio de pacotes" />
    </Appbar.Header>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.blue,
  },
})

export default Header
