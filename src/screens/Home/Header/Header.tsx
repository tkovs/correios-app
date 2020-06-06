import React, { FC } from 'react'
import { StyleSheet, StatusBar } from 'react-native'
import { Appbar } from 'react-native-paper'

import { colors } from '../../../styles/theme'

interface HeaderProps {
  updatePackets: () => void
}

type Props = HeaderProps

const Header: FC<Props> = ({ updatePackets }: Props) => (
  <Appbar.Header accessibilityStates={['disabled']} style={styles.header}>
    <StatusBar backgroundColor={colors.blue} />
    <Appbar.Content
      accessibilityStates={['disabled']}
      title="Correios"
      subtitle="Rastreio de pacotes"
    />
    <Appbar.Action
      accessibilityStates={['disabled']}
      icon="refresh"
      onPress={updatePackets}
    />
  </Appbar.Header>
)

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.blue,
  },
})

export default Header
