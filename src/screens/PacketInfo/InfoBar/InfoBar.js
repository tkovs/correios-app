import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import { colors } from '../../../styles/theme'

function InfoBar({ code, passedDays, shippingMode }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {passedDays} {passedDays > 1 ? 'dias' : 'dia'}
      </Text>
      <Text style={styles.text}>{code}</Text>
      <Text style={styles.text}>{shippingMode}</Text>
    </View>
  )
}

InfoBar.propTypes = {
  code: PropTypes.string.isRequired,
  passedDays: PropTypes.number.isRequired,
  shippingMode: PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.sandstorm,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  text: {
    color: colors.blue,
    fontSize: 14,
  },
})

export default InfoBar
