import React from 'react'
import { TextInputProps } from 'react-native'
import { useWindowDimensions } from 'react-native'

import {
  Container,
  TextInput
} from './styles'

interface InputProps extends TextInputProps {
  name?: string;
  placeholder?: string
}

const Input: React.FC<InputProps> = ({ ...rest }) => {
  const windowWidth = useWindowDimensions().width

  return (
    <Container width={windowWidth}>
      <TextInput placeholderTextColor="#fff" {...rest} />
    </Container>
  )
}

export default Input
