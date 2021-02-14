import React, { useState } from 'react'
import CheckBox from '@react-native-community/checkbox'

import {
  WorkoutDay,
  ButtonElement,
} from './styles'

interface CheckboxItemProps {
  day: string;
}

const CheckboxItem: React.FC<CheckboxItemProps> = ({ day }) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  return (
    <ButtonElement
      onPress={() => setToggleCheckBox(!toggleCheckBox)}
    >
      <CheckBox
        tintColor={ toggleCheckBox ? 'yellow' : 'white' }
        onCheckColor="yellow"
        boxType='circle'
        disabled={false}
        value={toggleCheckBox}
      />
      <WorkoutDay
        active={toggleCheckBox}
      >
        { `Dia ${day}` }
      </WorkoutDay>
    </ButtonElement>
  )
}


export default CheckboxItem
