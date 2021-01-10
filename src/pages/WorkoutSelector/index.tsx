import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Feather'

import Input from '../../Components/Input'
import Button from '../../Components/Button'

import {
  Container,
  Section,
  Title,
  BackButton,
} from './style'

const WorkoutSelector = () => {
  const navigation = useNavigation()

  return (
    <Container>
      <SafeAreaView />
      <BackButton onPress={() => navigation.navigate('Welcome')}>
        <Icon name="chevron-left" size={30} color="#fff" />
      </BackButton>
      <Title>Selecione seu plano</Title>

      <Section>
        <Input name="email" placeholder="Email" />
        <Input name="passowrd" placeholder="Senha" />

        <Button
          onPress={() => navigation.navigate('UserInfo')}
          marginTop={32}
        >
          ENVIAR
        </Button>
      </Section>
    </Container>
  )
}

export default WorkoutSelector
