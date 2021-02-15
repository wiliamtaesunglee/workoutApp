import React, { useState } from 'react'
import CheckBox from '@react-native-community/checkbox'
import { useNavigation } from '@react-navigation/native'
import { View } from 'react-native'

import {
  DayCheck,
  WorkoutDay,
  ButtonElement,
  ButtonContent,
} from './styles'

interface CheckboxItemProps {
  day: string;
}

const CheckboxItem: React.FC<CheckboxItemProps> = ({ day }) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const navigation = useNavigation()

  return (
    <ButtonElement
      onPress={() => {
        setToggleCheckBox(!toggleCheckBox)

      }}
    >
      <DayCheck
        tintColor={ '#fff'}
        onTintColor={'#fff000'}
        onCheckColor="yellow"
        boxType='circle'
        disabled={false}
        value={toggleCheckBox}
      />
      <ButtonContent
        onPress={() => navigation.navigate('WorkoutDay')}
      >
        <WorkoutDay
          active={toggleCheckBox}
        >
          { `Dia ${day}` }
        </WorkoutDay>
      </ButtonContent>
    </ButtonElement>
  )
}


export default CheckboxItem
