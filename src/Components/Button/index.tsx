import React from 'react'
import { RectButtonProperties } from 'react-native-gesture-handler'
import { useWindowDimensions } from 'react-native'

import { Container, Text } from './styles'

interface ButtonProps extends RectButtonProperties{
  children: string;
  marginTop?: number;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest}) => {
  const windowWidth = useWindowDimensions().width

  return (
    <Container {...rest} width={windowWidth}>
      <Text>
        { children }
      </Text>
    </Container>
  )
}

export default Button
