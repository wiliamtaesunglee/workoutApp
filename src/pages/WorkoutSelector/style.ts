import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: #000;
`

export const SafeAreaViewContainer = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Section = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Title = styled.Text`
  font-size: 28;
  font-family: 'Poppins-Black';
  text-transform: uppercase;
  color: #fff;
`

export const LocationText = styled.Text`
  font-size: 16px;
`

export const BackButton = styled.TouchableOpacity`
  margin-left: 30px;
`

export const ButtonContainer = styled.TouchableWithoutFeedback``

export const ImageItem = styled.Image`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-radius: 14px;
  background-color: red;
`

export const OverflowContainer = styled.View`
  height: ${({ height }) => height}px;
  overflow: hidden;
`

export const DateText = styled.Text`
  font-size: 12px;
  color: #fff;
`

export const ItemContainer = styled.View`
  ${({ height, padding }) => {
    css`
      height: ${height};
      padding: ${padding};
    `
  }};
`

export const ItemContainerRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
