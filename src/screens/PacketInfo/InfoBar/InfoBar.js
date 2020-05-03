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
      <View style={styles.smallInfo}>
        <FontAwesomeIcon name="road" size={20} color={colors.blue} />
        <Text style={styles.text}>
          {passedDays} {passedDays > 1 ? 'dias' : 'dia'}
        </Text>
      </View>
      <View style={styles.bigInfo}>
        <FontAwesomeIcon name="barcode" size={20} color={colors.blue} />
        <Text style={styles.text}>{code}</Text>
      </View>
      <View style={styles.smallInfo}>
        <MaterialIcon name="local-shipping" size={20} color={colors.blue} />
        <Text style={styles.text} numberOfLines={1}>
          {shippingMode}
        </Text>
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
    alignItems: 'center',
    backgroundColor: colors.sandstorm,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  smallInfo: {
    alignItems: 'center',
    width: '30%',
  },
  bigInfo: {
    alignItems: 'center',
    width: '40%',
  },
  text: {
    color: colors.blue,
    fontSize: 14,
  },
})

export default InfoBar
