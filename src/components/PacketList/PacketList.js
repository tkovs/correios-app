import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native'
import { Divider, Caption } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons'
import isEmpty from 'lodash/isEmpty'

import PacketItem from '../PacketItem'

const PacketList = ({ packets }) => {
  const screenWidth = Dimensions.get('window').width
  const iconSize = screenWidth * 0.8
  const iconColor = '#ddd'

  if (isEmpty(packets)) {
    return (
      <View style={styles.iconScreen}>
        <Icon name="error-outline" size={iconSize} color={iconColor} />
        <Caption testId="empty-packet-list">
          Nenhuma encomenda nesta lista
        </Caption>
      </View>
    )
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
    paddingHorizontal: 8,
  },
  iconScreen: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
})

PacketList.propTypes = {
  packets: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default PacketList
