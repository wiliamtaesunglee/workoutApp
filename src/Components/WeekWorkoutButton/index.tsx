import React from 'react'
import { RectButtonProperties } from 'react-native-gesture-handler'
import { useWindowDimensions } from 'react-native'

import CheckboxItem from './CheckboxItem'

import {
  ButtonContainer,
  ButtonTitle,
  WorkoutDayList,
  ButtonHeader,
} from './styles'

export interface RepProps {
  frequency: string;
  velocity: string;
  interval: string;
}

export interface WorkoutInterface {
  name: string;
  video: string;
  rep: RepProps[];
}

export interface TrainsProps {
  day: string;
  workout: WorkoutInterface[];
}

export interface WeekWorkoutButtonProps extends RectButtonProperties{
  title: string;
  trains: TrainsProps[];
  active: Boolean;
  onPress: () => void;
}

const WeekWorkoutButton: React.FC<WeekWorkoutButtonProps> = ({
  title,
  trains,
  active,
  onPress
}) => {
  const windowWidth = useWindowDimensions().width

  return (
    <ButtonContainer
      width={windowWidth}
    >
      <ButtonHeader
        onPress={onPress}
      >
        <ButtonTitle
          active={active}
        >
          { title }
        </ButtonTitle>
      </ButtonHeader>
    {
      active && (
        <WorkoutDayList>
          {
            trains.map(train => (
              <CheckboxItem day={train.day} />
            ))
          }
        </WorkoutDayList>
    )
    }
  </ButtonContainer>
  )
}

export default WeekWorkoutButton
