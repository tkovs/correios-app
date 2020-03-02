import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Divider } from 'react-native-paper'
import isEmpty from 'lodash/isEmpty'

import PacketItem from '../PacketItem'

const PacketList = ({ packets }) => {
  if (isEmpty(packets)) {
    return null
  }

  return (
    <ScrollView>
      {packets.map(packet => (
        <View style={styles.container} key={packet.code}>
          <PacketItem packet={packet} />
          <Divider />
        </View>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 8,
  },
})

PacketList.propTypes = {
  packets: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default PacketList
