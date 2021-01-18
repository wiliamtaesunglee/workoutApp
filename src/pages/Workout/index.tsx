import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

import {
  Container,
  ButtonContainer,
  SignInNavigation,
  SignInText,
  SignInTextDestac,
} from './styles'

const Workout: React.FC = () => {
  const navigation = useNavigation()

  return (
    <>
      <SafeAreaView style={{ backgroundColor: 'black' }} />
      <Container>
      </Container>
    </>
  )
}

export default Workout
