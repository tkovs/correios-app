import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import isNil from 'lodash/isNil'

import { colors } from '../../styles/theme'

const PacketItem = ({ packet }) => {
  if (isNil(packet)) {
    return null
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{packet.title}</Text>
      <Text style={styles.status}>{packet.status}</Text>
      <Text style={styles.code}>{packet.code}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    color: colors.licorice,
  },
  status: {
    color: colors.green,
    fontWeight: 'bold',
  },
  code: {
    color: colors.gray,
  },
  container: {
    marginVertical: 8,
  },
})

PacketItem.propTypes = {
  packet: PropTypes.shape({
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
  }).isRequired,
}

export default PacketItem
