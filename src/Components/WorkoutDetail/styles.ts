import styled from 'styled-components/native'

export const ButtonContainer = styled.View`
  flex-grow: 1;
  min-height: 200px;
  justify-content: center;
  width: 100%;
  border-bottom-width: 2px;
  border-color: #fff;
`

export const ButtonHeader = styled.TouchableOpacity`
  flex-direction: row;
`

export const ButtonElement = styled.TouchableOpacity`
  flex-direction: row;
  height: 40px;
`

export const ButtonTitle = styled.Text`
  color: ${({active}) => active ? '#fff000' : '#fff'};
  font-size: 14px;
  padding-top: 50px;
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

export const WorkoutDayList = styled.FlatList`
  margin-top: 32px;
`

export const EachTrain = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const TypeContainer = styled.View`
  height: 65px;
`

export const TypeTitle = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`

export const TypeText = styled.Text`
  color: white;
  padding-top: 8px;
`

export const InputText = styled.Text`
  color: white;
`

export const Input = styled.TextInput`
  border-bottom-width: 2px;
  border-color: white;
  color: white;
  align-items: center;
  justify-content: center;
`


