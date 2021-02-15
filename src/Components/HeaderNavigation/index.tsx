import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

import {
  Container,
  BackButton,
} from './styles'

const HeaderNavigation: React.FC = () => {
  const navigation = useNavigation()

  return (
    <Container>
      <SafeAreaView edges={['top']} />
      <BackButton onPress={() => navigation.goBack()}>
        <Icon name="chevron-left" size={30} color="#fff" />
      </BackButton>
    </Container>
  )
}

export default HeaderNavigation
