import React from 'react'
import { StyleSheet } from 'react-native'
import { Appbar } from 'react-native-paper'
import { colors } from '../../styles/theme'

const Header = () => (
  <Appbar.Header style={styles.header}>
    <Appbar.Content title="Correios" subtitle="Rastreio de pacotes" />
  </Appbar.Header>
)

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.blue,
  },
})

export default Header
