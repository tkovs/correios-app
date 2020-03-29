import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { View, StyleSheet } from 'react-native'
import { Caption, Text, Title } from 'react-native-paper'
import isEmpty from 'lodash/isEmpty'
import { formatLocation } from '../../utils/location'

function PacketTrackingItem({ datetime, status, from, to, locale, note }) {
  const time = moment(datetime).format('h:mm')
  const day = moment(datetime).format('D MMM')

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text>{time}</Text>
        <Text>{day}</Text>
      </View>
      <View style={styles.right}>
        <Title>{status}</Title>
        {!isEmpty(from) ? <Text>De: {formatLocation(from)}</Text> : null}
        {!isEmpty(to) ? <Text>Para: {formatLocation(to)}</Text> : null}
        {!isEmpty(locale) ? <Text>De: {formatLocation(locale)}</Text> : null}
        {note ? <Caption>Obs.: {note}</Caption> : null}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
  },
  left: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 8,
    marginRight: 8,
  },
})

PacketTrackingItem.propTypes = {
  datetime: PropTypes.instanceOf(Date).isRequired,
  status: PropTypes.string.isRequired,
  note: PropTypes.string,
  from: PropTypes.shape({
    city: PropTypes.string,
    state: PropTypes.string,
    place: PropTypes.string,
  }),
  to: PropTypes.shape({
    city: PropTypes.string,
    state: PropTypes.string,
    place: PropTypes.string,
  }),
  locale: PropTypes.shape({
    city: PropTypes.string,
    state: PropTypes.string,
    place: PropTypes.string,
  }),
}

PacketTrackingItem.defaultProps = {
  note: '',
  from: undefined,
  locale: undefined,
  to: undefined,
}

export default PacketTrackingItem
