import { useRef } from 'react'
import { Animated } from 'react-native'

export const useAnimation = () => {
  const opacity = useRef(new Animated.Value(0)).current
  const position = useRef(new Animated.Value(0)).current

  const fadeIn = (duration: number = 300) => {
    Animated.timing(opacity, {
      duration,
      toValue: 1,
      useNativeDriver: true
    }).start()
  }

  const fadeOut = () => {
    Animated.timing(opacity, {
      duration: 300,
      toValue: 0,
      useNativeDriver: true
    }).start()
  }

  const startMovingPosition = (
    duration: number = 300,
    initPosition: number
  ) => {
    position.setValue(initPosition)

    Animated.timing(position, {
      toValue: 0,
      duration,
      useNativeDriver: true
    }).start()
  }

  return {
    fadeIn,
    fadeOut,
    opacity,
    position,
    startMovingPosition
  }
}
