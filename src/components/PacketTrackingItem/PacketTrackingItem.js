import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { View, StyleSheet } from 'react-native'
import { Caption, Text, Title } from 'react-native-paper'

function PacketTrackingItem({ date, status, from, to, location, note }) {
  const time = moment(date).format('h:mm')
  const day = moment(date).format('D MMM')

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text>{time}</Text>
        <Text>{day}</Text>
      </View>
      <View style={styles.right}>
        <Title>{status}</Title>
        <Text>De: {from}</Text>
        {to ? <Text>Para: {to}</Text> : null}
        <Text>[gps icon] {location}</Text>
        {note ? <Caption>Obs.: {note}</Caption> : null}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  left: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: 'gray',
    paddingRight: 8,
    marginRight: 8,
  },
})

PacketTrackingItem.propTypes = {
  status: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  to: PropTypes.string,
  location: PropTypes.string.isRequired,
  note: PropTypes.string,
  date: PropTypes.instanceOf(Date).isRequired,
}

PacketTrackingItem.defaultProps = {
  to: '',
  note: undefined,
}

export default PacketTrackingItem
