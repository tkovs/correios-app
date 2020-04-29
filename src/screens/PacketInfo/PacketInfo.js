import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import moment from 'moment'
import first from 'lodash/first'
import last from 'lodash/last'

import InfoBar from './InfoBar'
import Header from './Header'
import PacketTrackingInfo from '../../components/PacketTrackingItem'

const dateToKey = datetime => moment(datetime).format('YYYY/MM/DD H:m')

const getPassedDays = (packetStatus, firstUpdate, lastUpdate) =>
  packetStatus === 'delivered'
    ? lastUpdate.diff(firstUpdate, 'days')
    : moment().diff(firstUpdate, 'days')

const PacketInfo = ({ packet, updateLastView }) => {
  const firstUpdate = moment(last(packet.statuses).datetime)
  const lastUpdate = moment(first(packet.statuses).datetime)
  const passedDays = getPassedDays(packet.status, firstUpdate, lastUpdate)

  useEffect(() => {
    updateLastView(new Date(), packet.code)
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Header code={packet.code} title={packet.title} />
      <InfoBar
        code={packet.code}
        passedDays={passedDays}
        shippingMode={packet.mode}
      />

      <ScrollView>
        {packet.statuses.map(status => (
          <PacketTrackingInfo key={dateToKey(status.datetime)} {...status} />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

PacketInfo.propTypes = {
  packet: PropTypes.shape({
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired,
    lastUpdate: PropTypes.objectOf(Date).isRequired,
    lastView: PropTypes.objectOf(Date).isRequired,
    statuses: PropTypes.array.isRequired,
  }).isRequired,
  updateLastView: PropTypes.func.isRequired,
}

export default PacketInfo
