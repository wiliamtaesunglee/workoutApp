import styled from 'styled-components/native'

export const ButtonContainer = styled.View`
  flex-grow: 1;
  justify-content: center;
  border-bottom-width: 2px;
  border-color: #fff;
`

export const ButtonHeader = styled.TouchableOpacity``

export const ButtonElement = styled.TouchableOpacity`
  flex-direction: row;
  height: 40px;
`

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

