import React from 'react'
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native'
import PropTypes from 'prop-types'
import isNil from 'lodash/isNil'

import { colors } from '../../styles/theme'

const PacketItem = ({ onClick, packet }) => {
  if (isNil(packet)) {
    return null
  }

  return (
    <TouchableHighlight underlayColor="#E5E5E5" onPress={onClick}>
      <View style={styles.container}>
        <Text style={styles.title}>{packet.title}</Text>
        <Text style={styles.status}>{packet.status}</Text>
        <Text style={styles.code}>{packet.code}</Text>
      </View>
    </TouchableHighlight>
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
    color: colors.isabelline,
  },
})

PacketItem.defaultProps = {
  onClick: null,
}

PacketItem.propTypes = {
  packet: PropTypes.shape({
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func,
}

export default PacketItem
