import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, StatusBar } from 'react-native'
import { Appbar } from 'react-native-paper'
import { colors } from '../../styles/theme'

const Header = ({ title, subtitle }) => (
  <Appbar.Header style={styles.header}>
    <StatusBar backgroundColor={colors.blue} />
    <Appbar.Content title={title} subtitle={subtitle} />
  </Appbar.Header>
)

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.blue,
  },
})

Header.defaultProps = {
  subtitle: null,
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
}

export default Header
