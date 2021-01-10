import styled from 'styled-components/native'

import loginBackground from '../../assets/images/hero-userinfo.png'

interface BackgroundProps {
  width: number;
  height: number;
}

interface FrequencyButtonProps {
  width: number;
}

interface QuestionTextProps {
  width: number;
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #000;
`

export const QuestContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #000;
`

export const Background = styled.ImageBackground.attrs<BackgroundProps>({
  source:loginBackground,
})`
  width: ${({width}) => width}px;
  height: ${({height}) => height}px;
  align-items: center;
  justify-content: center;
`

export const ButtonContainer = styled.View`
  position: absolute;
  bottom: 150px;
  left: 0;
  right: 0;
  width: 100%;
  align-items: center;
`

export const Title = styled.Text`
  color: #fff;
  font-size: 36px;
  font-family: Poppins-Black;
`

export const Text = styled.Text`
  color: #fff;
  font-size: 14px;
`

export const MainContainer = styled.View`
  width: 257px;
`

export const FrequencyButton = styled.TouchableOpacity<FrequencyButtonProps>`
  width: ${({width}) => width - 60}px;
  height: 50px;
  border-width: 2px;
  border-color: #fff000;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-top: ${({ marginTop }) => marginTop | 0}px;
  margin-bottom: 16px;
`

export const QestionText = styled.Text<QuestionTextProps>`
  font-size: 24px;
  color: #fff;
  width: ${({width}) => width - 60}px;
  margin-bottom: 64px;
  font-family: Poppins-Black;
  text-align: center;
  line-height: 26px;
`

export const AvatarImagePicker = styled.Image``
