import React, { useState, useRef } from 'react'
import { Transition, Transitioning, TransitioningView } from 'react-native-reanimated'

import HeaderNavigation from '../../Components/HeaderNavigation'
import { WeekWorkoutButtonProps } from '../../Components/WeekWorkoutButton'
import workout from './workout'
import WeekWorkoutButton from '../../Components/WeekWorkoutButton'
import {
  WeekWorkouts,
} from './styles'

const transition = (
  <Transition.Together>
    <Transition.In type="fade" durationMs={200} />
    <Transition.Change />
    <Transition.Out type="fade" durationMs={200} />
  </Transition.Together>
)

interface WorkoutProps {
  workout: WeekWorkoutButtonProps[]
}

const Workout: React.FC<WorkoutProps> = () => {
  const [ currentIndex, setCurrentIndex ] = useState<number | null>(null)
  const ref = useRef<TransitioningView>(null)

  return (
    <>
    <HeaderNavigation />
    <Transitioning.View
      ref={ref}
      transition={transition}
      style={{ flex: 1 }}
    >
      <WeekWorkouts
        style={{ flex: 1 }}
      >
        {
        workout.map((item, index) => {
          return (
            <WeekWorkoutButton
              title={item.title}
              trains={item.trains}
              active={currentIndex === index}
              onPress={() => {
                ref.current?.animateNextTransition()
                setCurrentIndex(
                  currentIndex === index
                  ? null
                  : index
                )
              }}
            />
          )
        })
        }
      </WeekWorkouts>
    </Transitioning.View>
    </>
  )
}

export default Workout
