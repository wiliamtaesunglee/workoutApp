import React from 'react'
import { useWindowDimensions } from 'react-native';

import Button from '../../Components/Button'
import {
  Background,
  ButtonContainer,
  MainContainer,
  QuestContainer,
  Text,
  Title,
} from './styles'

interface PreQuestProps {
  questionLevel: string;
  setQuestionLevel: (number) => void;
}

const PreQuest: React.FC<PreQuestProps> = ({ questionLevel, setQuestionLevel }) => {
  const windowWidth = useWindowDimensions().width
  const windowHeight = useWindowDimensions().height

  const handleOnPress = () => {
    setQuestionLevel(questionLevel + 1)
  }

  return (
    <QuestContainer>
      <Background
        width={windowWidth}
        height={windowHeight}
      >
        <MainContainer>
          <Title>
            Bem vindo ao programa de treinamento
          </Title>
          <Text>
            Ainda assim, existem dúvidas a respeito de como a necessidade de renovação processual afeta positivamente a correta previsão de todos os recursos funcionais envolvidos.
          </Text>
        </MainContainer>

        <ButtonContainer>
          <Button onPress={handleOnPress}>
            DADOS INICIAIS
          </Button>
        </ButtonContainer>
      </Background>
    </QuestContainer>

  )
}

export default PreQuest
