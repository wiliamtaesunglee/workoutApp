import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Feather'

import { BackButton } from './styles'

export const BackNavigation = () => {
  const navigation = useNavigation()

  return (
    <BackButton onPress={() => navigation.goBack()}>
      <Icon name="chevron-left" size={30} color="#fff" />
    </BackButton>
  )
}

export default BackNavigation
