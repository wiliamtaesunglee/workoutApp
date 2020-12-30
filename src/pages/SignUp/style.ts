import styled from 'styled-components/native'
import CheckBox from '@react-native-community/checkbox';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
`

export const Section = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Title = styled.Text`
  color: white;
  font-size: 36px;
  font-weight: bold;
  padding: 32px 0 0 30px;
`

export const BackButton = styled.TouchableOpacity``

export const TemrsAndServicesContainer = styled.View`
  width: ${({width}) => width - 60}px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 32px;
`

export const TemrsAndServicesCheckbox = styled(CheckBox)`
  height: 15px;
  width: 15px;
  margin-right: 16px;
`

export const TemrsAndServicesText = styled.Text`
  color: white;
  font-weight: ${({bold}) => bold ? 'bold' : 'normal'};
  flex-shrink: 1;
`
