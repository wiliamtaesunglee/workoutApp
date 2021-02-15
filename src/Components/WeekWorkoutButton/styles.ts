import styled from 'styled-components/native'
import CheckBox from '@react-native-community/checkbox'

export const ButtonContainer = styled.View`
  flex-grow: 1;
  min-height: 200px;
  justify-content: center;
  width: 100%;
  border-bottom-width: 2px;
  border-color: #fff;
`

export const ButtonHeader = styled.TouchableOpacity``

export const ButtonElement = styled.View`
  flex-direction: row;
  align-items: center;
  height: 40px;
`

export const ButtonContent = styled.TouchableOpacity``

export const ButtonTitle = styled.Text`
  color: ${({active}) => active ? '#fff000' : '#fff'};
  font-size: 38px;
  font-family: 'Poppins-Black';
  text-transform: uppercase;
  letter-spacing: 4px;
`

export const WorkoutDay = styled.Text`
  color: ${({active}) => active ? '#fff000' : '#fff'};
  font-size: 18px;
  font-family: 'Poppins-Black';
  line-height: ${18 * 2}px;
  padding-left: 16px;
`

export const WorkoutDayList = styled.View`
  margin-top: 32px;
`

export const Container = styled.View``

export const DayCheck = styled(CheckBox)`
  height: 15;
  width: 15;
`
