import React, { FC } from 'react'
import { View, StyleSheet, TouchableHighlight } from 'react-native'
import { ActivityIndicator, Badge, Text } from 'react-native-paper'
import moment, { Moment } from 'moment'
import first from 'lodash/first'
import last from 'lodash/last'
import find from 'lodash/find'
import isNil from 'lodash/isNil'

import { colors } from '../../styles/theme'

const getPassedDays: (
  packetStatus: string,
  firstShippingUpdate: Moment,
  lastShippingUpdate: Moment
) => number = (packetStatus, firstShippingUpdate, lastShippingUpdate) =>
  packetStatus === 'delivered'
    ? lastShippingUpdate.diff(firstShippingUpdate, 'days')
    : moment().diff(firstShippingUpdate, 'days')

interface PacketItemProps {
  packet: Packet
  onClick: (any) => void
  statusList: StatusListItem[]
}

type Props = PacketItemProps

const PacketItem: FC<Props> = ({ onClick, packet, statusList }: Props) => {
  const { code } = packet
  const activityIndicatorSize = 12
  const status = find(statusList, { code }) || {}
  const firstShippingUpdate = moment(last(packet.statuses).datetime)
  const lastShippingUpdate = moment(first(packet.statuses).datetime)
  const formattedLastShippingUpdate = moment(lastShippingUpdate).format('D MMM')
  const passedDays = getPassedDays(
    packet.status,
    firstShippingUpdate,
    lastShippingUpdate
  )
  const lastView = moment(packet.lastView)
  const updatedAt = moment(packet.updatedAt)

  const isViewed = !isNil(packet.lastView) && lastView.isAfter(updatedAt)

  return (
    <TouchableHighlight underlayColor="#E5E5E5" onPress={onClick}>
      <View style={styles.container}>
        <View>
          <View style={styles.titleContainer}>
            <Text accessibilityStates={['disabled']} style={styles.title}>
              {packet.title} {!isViewed && '(não visualizado)'}
            </Text>
            <ActivityIndicator
              accessibilityStates={['disabled']}
              animating={!isNil(status.pending)}
              size={activityIndicatorSize}
              color={colors.blue}
            />
          </View>
          <Text
            accessibilityStates={['disabled']}
            style={
              packet.status === 'delivered'
                ? styles.statusDelivered
                : styles.statusPending
            }
          >
            {packet.status}
          </Text>
          <Text accessibilityStates={['disabled']} style={styles.code}>
            {code}
          </Text>
        </View>
        <View style={styles.right}>
          <Badge>{packet.mode}</Badge>
          <Text accessibilityStates={['disabled']}>
            {formattedLastShippingUpdate}
          </Text>
          <Text accessibilityStates={['disabled']}>{`${passedDays} days`}</Text>
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
  statusList: [],
}

export default PacketItem
