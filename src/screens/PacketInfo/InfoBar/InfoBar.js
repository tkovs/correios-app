import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'

import { colors } from '../../../styles/theme'

function InfoBar({ code, passedDays, shippingMode }) {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <FontAwesomeIcon name="road" size={20} color={colors.blue} />
        <Text style={styles.text}>
          {passedDays} {passedDays > 1 ? 'dias' : 'dia'}
        </Text>
      </View>
      <View style={styles.info}>
        <FontAwesomeIcon name="barcode" size={20} color={colors.blue} />
        <Text style={styles.text}>{code}</Text>
      </View>
      <View style={styles.info}>
        <MaterialIcon name="local-shipping" size={20} color={colors.blue} />
        <Text style={styles.text}>{shippingMode}</Text>
      </View>
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
  info: {
    alignItems: 'center',
  },
  text: {
    color: colors.blue,
    fontSize: 14,
  },
})

export default InfoBar
