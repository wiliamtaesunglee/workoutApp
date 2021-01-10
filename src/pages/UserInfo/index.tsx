import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

import EndQuest from './EndQuest'
import ThirdQuest from './ThirdQuest'
import SecondQuest from './SecondQuest'
import FirstQuest from './FirstQuest'
import PreQuest from './PreQuest'
import {
  Container,
} from './styles'

const UserInfo: React.FC = () => {
  const [ questionLevel, setQuestionLevel ] = useState(0)
  const navigation = useNavigation()

  useEffect(() => {
    if (questionLevel === 4) {
      setTimeout(() => {
        navigation.navigate('WorkoutSelector')
      }, 2000)
    }
  }, [ questionLevel ])

  const ScreenLevel = {
    0: PreQuest,
    1: FirstQuest,
    2: SecondQuest,
    3: ThirdQuest,
    4: EndQuest,
  }[ questionLevel ]

  return (
      <Container>
        <ScreenLevel
          questionLevel={questionLevel}
          setQuestionLevel={setQuestionLevel}
        />
      </Container>
  )
}

export default UserInfo
