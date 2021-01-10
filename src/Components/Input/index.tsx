import React, { useState, useCallback } from 'react'
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
  const [ isFocus, setisFocus ] = useState(false)
  const [ isFilled, setIsFilled ] = useState(false)
  const [ value, setValue ] = useState("")
  const windowWidth = useWindowDimensions().width

  const handleInputFocus = useCallback((event) => {
    setisFocus(true)
    setValue(event.nativeEvent.text)
  }, [])

  const handleInputBlur = useCallback(() => {
    setisFocus(false)

    setIsFilled(!!value)
  }, [])

  return (
    <Container width={windowWidth} isFocus={isFocus}>
      <TextInput
        placeholderTextColor="#fff"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...rest}
        keyboarAppearance="dark"
      />
    </Container>
  )
}

export default Input
