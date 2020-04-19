import React from 'react'
import { View, StyleSheet, TouchableHighlight } from 'react-native'
import { Badge, Text } from 'react-native-paper'
import PropTypes from 'prop-types'
import moment from 'moment'

import { colors } from '../../styles/theme'

const PacketItem = ({ onClick, packet }) => {
  const lastUpdate = packet.statuses[0].datetime
  const FormattedLastUpdate = moment(lastUpdate).format('D MMM')

  return (
    <TouchableHighlight underlayColor="#E5E5E5" onPress={onClick}>
      <View style={styles.container}>
        <View style={styles.left}>
          <Text style={styles.title}>{packet.title}</Text>
          <Text
            style={
              packet.status === 'delivered'
                ? styles.statusDelivered
                : styles.statusPending
            }
          >
            {packet.status}
          </Text>
          <Text style={styles.code}>{packet.code}</Text>
        </View>
        <View style={styles.right}>
          <Badge>{packet.mode}</Badge>
          <Text>{FormattedLastUpdate}</Text>
        </View>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    color: colors.snow,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  right: {
    alignItems: 'flex-end',
  },
  title: {
    color: colors.licorice,
  },
  statusDelivered: {
    color: colors.green,
    fontWeight: 'bold',
  },
  statusPending: {
    color: colors.red,
    fontWeight: 'bold',
  },
  code: {
    color: colors.gray,
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
    mode: PropTypes.string.isRequired,
    statuses: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
  onClick: PropTypes.func,
}

export default PacketItem
