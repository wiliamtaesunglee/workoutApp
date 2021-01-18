import React, {
  useState,
  useRef,
  useCallback,
  useEffect
} from 'react'
import {
  StatusBar,
  Image,
  FlatList,
  Dimensions,
  Animated,
  View,
} from 'react-native'
import {
  FlingGestureHandler,
  Directions,
  State,
} from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

import events from './events'
import {
  LocationText,
  ButtonContainer,
  SafeAreaViewContainer,
  Title,
  OverflowContainer,
  DateText,
  ItemContainer,
  ItemContainerRow,
} from './style'

const { width } = Dimensions.get('screen')
const OVERFLOW_HEIGHT = 70;
const SPACING = 10;
const ITEM_WIDTH = width * 0.76;
const ITEM_HEIGHT = ITEM_WIDTH * 1.7;
const VISIBLE_ITEMS = 3;

const OverflowItems = ({ data, scrollXAnimated }) => {
  const inputRange = [-1, 0, 1];
  const translateY = scrollXAnimated.interpolate({
    inputRange,
    outputRange: [OVERFLOW_HEIGHT, 0, -OVERFLOW_HEIGHT],
  });
  return (
    <OverflowContainer height={OVERFLOW_HEIGHT}>
      <Animated.View style={{ transform: [{ translateY }] }}>
        {data.map((item, index) => {
          return (
            <ItemContainer
              key={index}
              height={OVERFLOW_HEIGHT}
              padding={SPACING * 2}
            >
              <Title numberOfLines={1}>
                {item.title}
              </Title>
              <ItemContainerRow>
                <LocationText>
                  {item.location}
                </LocationText>
                <DateText>
                  { item.date }
                </DateText>
              </ItemContainerRow>
            </ItemContainer>
          )
        })}
      </Animated.View>
    </OverflowContainer>
  )
}

const WorkoutSelector = () => {
  const [data, setData] = useState(events)
  const scrollXIndex = useRef(new Animated.Value(0)).current
  const scrollXAnimated = useRef(new Animated.Value(0)).current
  const [currentItemIndex, setCurrentItemIndex] = useState(0)
  const navigation = useNavigation()
  const setActiveIndex = useCallback(
    (activeIndex) => {
      scrollXIndex.setValue(activeIndex, )
      setCurrentItemIndex(activeIndex)
  }, [])

  useEffect(() => {
    Animated.spring(scrollXAnimated, {
      toValue: scrollXIndex,
      useNativeDriver: true,
    }).start()
  })

  return (
    <FlingGestureHandler
      key='left'
      direction={Directions.LEFT}
      onHandlerStateChange={(ev) => {
        if (ev.nativeEvent.state === State.END) {
          if (currentItemIndex < data.length - 1) {
            setActiveIndex(currentItemIndex + 1)
          } else {
            setActiveIndex(0)
          }
        }
      }}
    >
      <FlingGestureHandler
        key='right'
        direction={Directions.RIGHT}
        onHandlerStateChange={(ev) => {
          if (ev.nativeEvent.state === State.END) {
            if (currentItemIndex === 0) {
              return
            }
            setActiveIndex(currentItemIndex - 1);
          }
        }}
      >
        <SafeAreaViewContainer>
          <StatusBar hidden />
          <OverflowItems data={data} scrollXAnimated={scrollXAnimated} />
          <FlatList
            data={data}
            keyExtractor={(_, index) => String(index)}
            horizontal
            inverted
            contentContainerStyle={{
              flex: 1,
              justifyContent: 'center',
              padding: SPACING * 2,
              marginTop: 50,
            }}
            scrollEnabled={false}
            removeClippedSubviews={false}
            CellRendererComponent={({
              item,
              index,
              children,
              style,
              ...props
            }) => {
              const newStyle = [style, { zIndex: data.length - index }];
              return (
                <View style={newStyle} index={index} {...props}>
                  {children}
                </View>
              );
            }}
            renderItem={({ item, index }) => {
              const inputRange = [index - 1, index, index + 1];
              const translateX = scrollXAnimated.interpolate({
                inputRange,
                outputRange: [50, 0, -100],
              });
              const scale = scrollXAnimated.interpolate({
                inputRange,
                outputRange: [0.8, 1, 1.3],
              });
              const opacity = scrollXAnimated.interpolate({
                inputRange,
                outputRange: [1 - 1 / VISIBLE_ITEMS, 1, 0],
              });

              return (
                <Animated.View
                  style={{
                    position: 'absolute',
                    left: -ITEM_WIDTH / 2,
                    opacity,
                    transform: [
                      {
                        translateX,
                      },
                      { scale },
                    ],
                  }}
                >
                  <ButtonContainer
                    onPress={() => {
                      navigation.navigate(
                        'Workout',
                        events[currentItemIndex]
                      )
                    }}
                  >
                    <Image
                      source={{ uri: item.poster }}
                      style={{
                        width: ITEM_WIDTH,
                        height: ITEM_HEIGHT,
                        borderRadius: 14,
                      }}
                    />
                  </ButtonContainer>
                </Animated.View>
              );
            }}
          />
        </SafeAreaViewContainer>
      </FlingGestureHandler>
    </FlingGestureHandler>
  );
}

export default WorkoutSelector
