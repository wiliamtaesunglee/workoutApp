import React, { useState } from 'react'
import { TextInputProps, useWindowDimensions } from 'react-native'

import {
  Container,
  TextInput
} from './styles'

interface InputProps extends TextInputProps {
  name?: string;
  placeholder?: string
}

const Input: React.FC<InputProps> = ({ ...rest }) => {
  const [ selected, setSelected ] = useState(false)
  const windowWidth = useWindowDimensions().width

  return (
    <Container width={windowWidth} selected={selected}>
      <TextInput
        placeholderTextColor="#fff"
        {...rest} onFocus={(event) => console.warn(event.nativeEvent)}
        keyboarAppearance="dark"
      />
    </Container>
  )
}

export default Input
