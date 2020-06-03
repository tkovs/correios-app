import React, { FC } from 'react'
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native'
import { Divider, Caption } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons'
import isEmpty from 'lodash/isEmpty'

import PacketItem from '../PacketItem'

interface PacketListProps {
  packets: Packet[]
}

type Props = PacketListProps

const PacketList: FC<Props> = ({ packets }: Props) => {
  const screenWidth = Dimensions.get('window').width
  const iconSize = screenWidth * 0.8
  const iconColor = '#ddd'

  if (isEmpty(packets)) {
    return (
      <View style={styles.iconScreen}>
        <Icon name="error-outline" size={iconSize} color={iconColor} />
        <Caption>Nenhuma encomenda nesta lista</Caption>
      </View>
    )
  }

  return (
    <ScrollView>
      {packets.map((packet) => (
        <View style={styles.container} key={packet.code}>
          <PacketItem packet={packet} />
          <Divider accessibilityStates={['disabled']} />
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

export default PacketList
