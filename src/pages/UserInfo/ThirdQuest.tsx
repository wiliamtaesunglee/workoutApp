import React, { useCallback, useEffect, useState } from 'react'
import { useWindowDimensions } from 'react-native'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'

import Button from '../../Components/Button'
import {
  Container,
  QestionText,
  QuestContainer,
} from './styles'

interface ThirdQuestProps {
  questionLevel: string;
  setQuestionLevel: (number) => void;
}

const ThirdQuest: React.FC<ThirdQuestProps> = ({ setQuestionLevel, questionLevel }) => {
  const windowWidth = useWindowDimensions().width
  const [image, setImage] = useState('')

  useEffect(() => {
    if (!!image) {
      setQuestionLevel(questionLevel + 1)
    }
  } ,[ image ])

  const handleUpdateAvatar = useCallback(() => {
    launchCamera({
      mediaType: 'photo',
      saveToPhotos: true,
    }, response => {
      if (!!response.errorCode) {
        console.error(response.errorCode)
      }

      if (!!response.uri) {
        setImage(response.uri)
      }

    })
  }, [])

  const handleImageFolderPick = useCallback(() => {
    launchImageLibrary({
      mediaType: 'photo',
    }, response => {
      if (!!response.errorCode) {
        console.error(response.errorCode)
        return
      }

      if (!!response.uri) {
        setImage(response.uri)
        return
      }
    })
  }, [])

  return (
    <QuestContainer>
      <Container>
        <QestionText width={windowWidth}>
          Adicionar foto
        </QestionText>

        <Button
          onPress={handleUpdateAvatar}
          marginTop={32}
        >
          Tirar Foto
        </Button>

        <Button
          onPress={handleImageFolderPick}
          marginTop={32}
        >
          Escolher do album
        </Button>
      </Container>
    </QuestContainer>
  )
}

export default ThirdQuest
