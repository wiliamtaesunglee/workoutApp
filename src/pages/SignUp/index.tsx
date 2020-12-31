import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useWindowDimensions } from 'react-native'

import Input from '../../Components/Input'
import Button from '../../Components/Button'

import {
  Container,
  Section,
  Title,
  BackButton,
  TemrsAndServicesContainer,
  TemrsAndServicesCheckbox,
  TemrsAndServicesText,
} from './style'

const SignUp = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const windowWidth = useWindowDimensions().width
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
          ENVIAR
        </Button>

        <TemrsAndServicesContainer width={windowWidth}>
          <TemrsAndServicesCheckbox
            tintColor={ toggleCheckBox ? 'yellow' : 'white' }
            onCheckColor="yellow"
            boxType='square'
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
          />
          <TemrsAndServicesText>Eu concordo com os termos de políticas da Iridium Labs</TemrsAndServicesText>
        </TemrsAndServicesContainer>
      </Section>
    </Container>
  )
}

export default SignUp
