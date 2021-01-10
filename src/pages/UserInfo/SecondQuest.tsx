import React from 'react'
import { useWindowDimensions } from 'react-native';

import Button from '../../Components/Button'
import Input from '../../Components/Input'
import {
  Container,
  QestionText,
  QuestContainer,
} from './styles'

interface FirstQuestProps {
  questionLevel: string;
  setQuestionLevel: (number) => void;
}

const FirstQuest: React.FC<FirstQuestProps> = ({ setQuestionLevel, questionLevel }) => {
  const windowWidth = useWindowDimensions().width

  const handleOnPress = () => {
    setQuestionLevel(questionLevel + 1)
  }

  return (
    <QuestContainer>
      <Container>
        <QestionText width={windowWidth}>
          DADOS INICIAIS
        </QestionText>
        <Input name="Peso" placeholder="Peso" />
        <Input name="Altura" placeholder="Altura " />
        <Input name="Data" placeholder="Data" />

        <Button
          onPress={handleOnPress}
          marginTop={32}
        >
          ENVIAR
        </Button>
      </Container>
    </QuestContainer>
  )
}

export default FirstQuest
