import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

interface ContainerProps {
  width: number;
  marginTop: number;
}

export const Container = styled(RectButton)<ContainerProps>`
  width: ${({width}) => width - 60}px;
  height: 50px;
  background-color: #fff000;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-top: ${({ marginTop }) => marginTop | 0}px;
`

export const Text = styled.Text`
  font-size: 18px;
  font-weight: bold;
`
