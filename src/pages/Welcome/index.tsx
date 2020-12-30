import React from 'react'
import { useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import Button from '../../Components/Button'
import {
  Container,
  Background,
  ButtonContainer,
  SignInNavigation,
  SignInText,
  SignInTextDestac,
} from './styles'

const Welcome: React.FC = () => {
  const windowWidth = useWindowDimensions().width
  const windowHeight = useWindowDimensions().height
  const navigation = useNavigation()

  return (
    <>
      <SafeAreaView style={{ backgroundColor: 'black' }} />
      <Container>
        <Background
          width={windowWidth}
          height={windowHeight}
        >
          <ButtonContainer>
            <Button onPress={() => navigation.navigate('SignUp')}>
              CADASTRE-SE GRÁTIS
            </Button>

            <SignInNavigation
              onPress={() => navigation.navigate('SignIn')}
            >
              <SignInText>JÁ POSSUI CADASTRO?</SignInText>
              <SignInTextDestac> ACESSE AQUI</SignInTextDestac>
            </SignInNavigation>
          </ButtonContainer>
        </Background>
      </Container>
    </>
  )
}

export default Welcome
