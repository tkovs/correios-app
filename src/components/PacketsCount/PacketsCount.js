import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native'
import { Caption } from 'react-native-paper'
import { colors } from '../../styles/theme'

function PacketsCount({ quantity }) {
  if (quantity === 0) {
    return null
  }

  const phrase = `${quantity} encomenda${quantity > 1 ? 's' : ''}`

  return (
    <View style={styles.container}>
      <Caption style={styles.text}>{phrase}</Caption>
    </View>
  )
}

PacketsCount.defaultProps = {
  quantity: 0,
}

PacketsCount.propTypes = {
  quantity: PropTypes.number,
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.sandstorm,
    alignItems: 'center',
  },
  text: {
    color: colors.blue,
  },
})

export default PacketsCount
