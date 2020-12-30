import styled from 'styled-components/native'

import loginBackground from '../../assets/images/login-background.png'

interface BackgroundProps {
  width: number;
  height: number;
}

export const Container = styled.View`
  flex: 1;
`

export const Background = styled.ImageBackground.attrs<BackgroundProps>({
  source:loginBackground,
})`
  width: ${({width}) => width}px;
  height: ${({height}) => height}px;
`

export const ButtonContainer = styled.View`
  position: absolute;
  bottom: 150px;
  left: 0;
  right: 0;
  width: 100%;
  align-items: center;
`

export const SignInNavigation = styled.TouchableOpacity`
  flex-direction: row;
  margin-top: 16px;
`

export const SignInText = styled.Text`
  color: white;
`

export const SignInTextDestac = styled.Text`
  color: #fff000;
  font-weight: bold;
`
