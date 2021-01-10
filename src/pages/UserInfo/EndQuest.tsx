import React from 'react'

import {
  Container,
  Title,
  QuestContainer,
} from './styles'

const EndQuest: React.FC = () => (
    <QuestContainer
      animationType={'slide'}
      visibleModal={false}
    >
      <Container>
        <Title>
          Obrigado, em instantes você poderá acesar as planilhas de treino
        </Title>
      </Container>
    </QuestContainer>
  )

export default EndQuest
