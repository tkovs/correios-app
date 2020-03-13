import React from 'react'
import { useNavigation } from '@react-navigation/native'

import Header from './Header'

function HeaderContainer(props) {
  const { goBack } = useNavigation()

  return <Header {...props} goBack={goBack} />
}

export default HeaderContainer
