import React from 'react'
import { RectButtonProperties } from 'react-native-gesture-handler'
import { useWindowDimensions } from 'react-native'
import { SafeAreaView } from 'react-native'

import VideoPlayer from '../../Components/VideoPlayer'
import {
  ButtonContainer,
  ButtonTitle,
  WorkoutDayList,
  ButtonHeader,
  EachTrain,
  TypeContainer,
  TypeTitle,
  TypeText,
  Input,
} from './styles'
import { uniqueID } from '../../utils/uniqueID'

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
  frequency: string;
  velocity: string;
  interval: string;
}

export interface WeekWorkoutButtonProps extends RectButtonProperties{
  trains: TrainsProps[];
  active: Boolean;
  onPress: () => void;
  name: string;
  video: string;
}

const WorkoutDetail: React.FC<WeekWorkoutButtonProps> = ({
  name,
  trains,
  active,
  video,
  onPress
}) => {
  const windowWidth = useWindowDimensions().width

  return (
    <SafeAreaView>
      <ButtonContainer
        width={windowWidth}
      >
        <ButtonHeader
          onPress={onPress}
        >
          <VideoPlayer
            uri={video}
          />
          <ButtonTitle
            active={active}
          >
            { name }
          </ButtonTitle>
        </ButtonHeader>
      {
        active && (
          <WorkoutDayList
            data={trains}
            key={() => uniqueID()}
            renderItem={({ item }) => {
              return (
                <EachTrain>
                  <TypeContainer>
                    <TypeTitle>
                      Séries
                    </TypeTitle>
                    <TypeText>
                      {item.frequency}
                    </TypeText>
                  </TypeContainer>

                  <TypeContainer>
                    <TypeTitle>
                      Veloc
                    </TypeTitle>
                    <TypeText>
                      {item.velocity}
                    </TypeText>
                  </TypeContainer>

                  <TypeContainer>
                    <TypeTitle>
                      Int
                    </TypeTitle>
                    <TypeText>
                      {item.interval}
                    </TypeText>
                  </TypeContainer>

                  <TypeContainer>
                    <TypeTitle>
                      Peso
                    </TypeTitle>
                      <Input />
                  </TypeContainer>

                  <TypeContainer>
                    <TypeTitle>
                      Rep
                    </TypeTitle>
                    <Input />
                  </TypeContainer>
                </EachTrain>
              )
            }}
          />
      )
      }
    </ButtonContainer>
  </SafeAreaView>
  )
}

export default WorkoutDetail
