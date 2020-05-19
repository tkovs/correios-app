import React, { FC } from 'react'
import { View, StyleSheet } from 'react-native'
import { Caption } from 'react-native-paper'
import { colors } from '../../styles/theme'

interface PacketsCountProps {
  quantity: number
  testID?: string
}

type Props = PacketsCountProps

const PacketsCount: FC<Props> = ({ quantity, testID }: Props) => {
  if (quantity === 0) {
    return null
  }

  const phrase = quantity === 1 ? '1 encomenda' : `${quantity} encomendas`

  return (
    <View style={styles.container}>
      <Caption style={styles.text} testID={testID}>
        {phrase}
      </Caption>
    </View>
  )
}

PacketsCount.defaultProps = {
  quantity: 0,
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.sandstorm,
    alignItems: 'center',
    borderBottomColor: colors.yellow,
    borderBottomWidth: 1,
  },
  text: {
    color: colors.blue,
  },
})

export default PacketsCount
