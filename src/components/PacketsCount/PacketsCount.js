import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native'
import { Caption } from 'react-native-paper'
import { colors } from '../../styles/theme'

function PacketsCount({ quantity, testID }) {
  if (quantity === 0) {
    return null
  }

  const phrase = quantity === 1 ? '1 encomenda' : `${quantity} encomendas`

  return (
    <View style={styles.container}>
      <Caption style={styles.text} testID={testID}>
        {phrase}
      </Caption>
    </View>
  )
}

PacketsCount.defaultProps = {
  quantity: 0,
  testID: null,
}

PacketsCount.propTypes = {
  quantity: PropTypes.number,
  testID: PropTypes.string,
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.sandstorm,
    alignItems: 'center',
    borderBottomColor: colors.yellow,
    borderBottomWidth: 1,
  },
  text: {
    color: colors.blue,
  },
})

export default PacketsCount
