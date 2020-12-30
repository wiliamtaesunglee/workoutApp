import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'

import Input from '../../Components/Input'
import Button from '../../Components/Button'

import {
  Container,
  Section,
  Title,
  BackButton,
} from './style'

const SignUp = () => {
  const navigation = useNavigation()

  return (
    <Container>
      <SafeAreaView />
      <BackButton onPress={() => navigation.navigate('Welcome')}>
        {/* <ChevronLeft color="white" size={20} /> */}
      </BackButton>
      <Title>Criar Conta</Title>

      <Section>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" placeholder="Email" />
        <Input name="passowrd" placeholder="Senha" />
        <Input name="password" placeholder="Confirmar senha" />

        <Button
          onPress={() => {}}
          marginTop={32}
        >
          ENIVAR
        </Button>
      </Section>
    </Container>
  )
}

export default SignUp
