import React from 'react'
import PropTypes from 'prop-types'
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import moment from 'moment'

import Header from './Header'
import PacketTrackingInfo from '../../components/PacketTrackingItem'

const dateToKey = datetime => moment(datetime).format('YYYY/MM/DD H:m')

const PacketInfo = ({ packet }) => (
  <SafeAreaView style={styles.container}>
    <Header code={packet.code} title={packet.title} />

    <ScrollView>
      {packet.statuses.map(status => (
        <PacketTrackingInfo key={dateToKey(status.datetime)} {...status} />
      ))}
    </ScrollView>
  </SafeAreaView>
)

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
    statuses: PropTypes.array.isRequired,
  }).isRequired,
}

export default PacketInfo
