import React from 'react'
import { useWindowDimensions } from 'react-native';

import {
  Container,
  FrequencyButton,
  Text,
  QestionText,
  QuestContainer,
} from './styles'

interface FirstQuestProps {
  questionLevel: string;
  setQuestionLevel: (number) => void;
}

const FirstQuest: React.FC<FirstQuestProps> = ({ setQuestionLevel, questionLevel }) => {
  const windowWidth = useWindowDimensions().width

  const frequency = [
    '0 - 1',
    '2 - 3',
    '4 - 5',
    '+5',
  ]

  const handleOnPress = () => {
    setQuestionLevel(questionLevel + 1)
  }

  return (
    <QuestContainer>
      <Container>
        <QestionText width={windowWidth}>
          QUANTAS VEZES POR SEMANA VOCÊ TREINA?
        </QestionText>
        {
          frequency.map(((item, index) => (
          <FrequencyButton
            key={index}
            width={windowWidth}
            onPress={handleOnPress}
          >
            <Text>
              { item }
            </Text>
          </FrequencyButton>
          )))
        }
      </Container>
    </QuestContainer>
  )
}

export default FirstQuest
