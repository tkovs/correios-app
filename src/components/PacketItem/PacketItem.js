import React from 'react'
import { View, StyleSheet, TouchableHighlight } from 'react-native'
import { ActivityIndicator, Badge, Text } from 'react-native-paper'
import PropTypes from 'prop-types'
import moment from 'moment'
import first from 'lodash/first'
import last from 'lodash/last'
import find from 'lodash/find'
import isNil from 'lodash/isNil'

import { colors } from '../../styles/theme'

const getPassedDays = (packetStatus, firstShippingUpdate, lastShippingUpdate) =>
  packetStatus === 'delivered'
    ? lastShippingUpdate.diff(firstShippingUpdate, 'days')
    : moment().diff(firstShippingUpdate, 'days')

const PacketItem = ({ onClick, packet, statusList }) => {
  const { code } = packet
  const activityIndicatorSize = 12
  const status = find(statusList, { code }) || {}
  const firstShippingUpdate = moment(last(packet.statuses).datetime)
  const lastShippingUpdate = moment(first(packet.statuses).datetime)
  const formattedLastUpdate = moment(lastShippingUpdate).format('D MMM')
  const passedDays = getPassedDays(
    packet.status,
    firstShippingUpdate,
    lastShippingUpdate
  )
  const lastView = moment(packet.lastView)
  const lastUpdate = moment(packet.lastUpdate)

  const isViewed = lastView.isAfter(lastUpdate)

  return (
    <TouchableHighlight underlayColor="#E5E5E5" onPress={onClick}>
      <View style={styles.container}>
        <View style={styles.left}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              {packet.title} {!isViewed && '(não visualizado)'}
            </Text>
            <ActivityIndicator
              animating={!isNil(status.pending)}
              size={activityIndicatorSize}
              color={colors.blue}
            />
          </View>
          <Text
            style={
              packet.status === 'delivered'
                ? styles.statusDelivered
                : styles.statusPending
            }
          >
            {packet.status}
          </Text>
          <Text style={styles.code}>{code}</Text>
        </View>
        <View style={styles.right}>
          <Badge>{packet.mode}</Badge>
          <Text>{formattedLastUpdate}</Text>
          <Text>{`${passedDays} days`}</Text>
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
    marginRight: 8,
  },
  titleContainer: {
    flexDirection: 'row',
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
  statusList: [],
}

PacketItem.propTypes = {
  packet: PropTypes.shape({
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired,
    lastUpdate: PropTypes.objectOf(Date).isRequired,
    lastView: PropTypes.objectOf(Date).isRequired,
    statuses: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
  onClick: PropTypes.func,
  statusList: PropTypes.arrayOf(PropTypes.object),
}

export default PacketItem
