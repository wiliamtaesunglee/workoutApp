import styled from 'styled-components/native'

interface ContainerProps {
  width: number;
}

export const Container = styled.View<ContainerProps>`
  width: ${({width}) => width - 60}px;
  height: 50px;
  background-color: transparent;
  margin-bottom: 8px;
  border-bottom-color: #fff;
  border-bottom-width: 2px;
`

export const TextInput = styled.TextInput`
  flex: 1;
  color: #fff;
  font-size: 18px;
`
