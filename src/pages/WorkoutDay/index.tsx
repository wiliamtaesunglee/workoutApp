import React, { useState, useRef } from 'react'
import { Transition, Transitioning, TransitioningView } from 'react-native-reanimated'

import HeaderNavigation from '../../Components/HeaderNavigation'
import workout from './workout'
import WorkoutDetail from '../../Components/WorkoutDetail'
import {
  WeekWorkouts,
  Title,
} from './styles'

const transition = (
  <Transition.Together>
    <Transition.In type="fade" durationMs={200} />
    <Transition.Change />
    <Transition.Out type="fade" durationMs={200} />
  </Transition.Together>
)

const Workout: React.FC = () => {
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
          workout[0].trains[0].workout.map((item, index) => {
            console.warn(item)
            return (
              <WorkoutDetail
                name={item.name}
                trains={item.rep}
                video={item.video}
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
