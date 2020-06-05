import React, { FC } from 'react'
import moment from 'moment'
import { View, StyleSheet } from 'react-native'
import { Avatar, Caption, Text } from 'react-native-paper'
import isEmpty from 'lodash/isEmpty'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { formatLocation, formatInitialLocation } from '../../utils/location'
import { colors } from '../../styles/theme'

interface PacketTrackingItemProps {
  datetime: Date
  status: string
  note?: string
  from?: Locale
  to?: Locale
  locale?: Locale
}

type Props = PacketTrackingItemProps

const PacketTrackingItem: FC<Props> = ({
  datetime,
  status,
  from,
  to,
  locale,
  note,
}: Props) => {
  const time = moment(datetime).format('h:mm')
  const day = moment(datetime).format('D MMM')

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text
          accessibilityStates={['disabled']}
          style={[styles.textColor, styles.alignTextToLocation]}
        >
          {time}
        </Text>
        <Text
          accessibilityStates={['disabled']}
          style={[styles.textColor, styles.alignTextToLocation]}
        >
          {day}
        </Text>
      </View>
      <View style={styles.icon}>
        <Avatar.Icon
          accessibilityStates={['disabled']}
          size={48}
          icon="truck"
          color={colors.blue}
        />
      </View>
      <View style={styles.right}>
        <Text
          accessibilityStates={['disabled']}
          style={[
            styles.textColor,
            styles.alignTextToLocation,
            styles.boldText,
          ]}
          numberOfLines={1}
        >
          {status}
        </Text>
        {!isEmpty(from) ? (
          <Text
            accessibilityStates={['disabled']}
            style={[styles.textColor, styles.alignTextToLocation]}
          >
            De: {formatLocation(from)}
          </Text>
        ) : null}
        {!isEmpty(to) ? (
          <Text
            accessibilityStates={['disabled']}
            style={[styles.textColor, styles.alignTextToLocation]}
          >
            Para: {formatLocation(to)}
          </Text>
        ) : null}
        {!isEmpty(locale) ? (
          <Text
            accessibilityStates={['disabled']}
            style={[styles.textColor, styles.alignTextToLocation]}
          >
            De: {formatLocation(locale)}
          </Text>
        ) : null}
        <View style={styles.locationInfo}>
          <Icon name="location-on" size={20} color={colors.licorice} />
          <Text
            accessibilityStates={['disabled']}
            style={[styles.textColor, styles.alignTextToLocation]}
          >
            {formatInitialLocation({ from, to, locale })}
          </Text>
        </View>
        {note ? <Caption>Obs.: {note}</Caption> : null}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingRight: 16,
    flexDirection: 'row',
  },
  icon: {
    justifyContent: 'center',
    paddingRight: 4,
  },
  left: {
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 64,
  },
  textColor: {
    color: colors.licoric,
  },
  alignTextToLocation: {
    paddingLeft: 4,
  },
  right: {},
  locationInfo: {
    flexDirection: 'row',
  },
  boldText: {
    fontWeight: 'bold',
  },
})

PacketTrackingItem.defaultProps = {
  note: '',
  from: undefined,
  locale: undefined,
  to: undefined,
}

export default PacketTrackingItem
