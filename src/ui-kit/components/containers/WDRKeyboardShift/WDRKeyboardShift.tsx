import React, { useEffect, useState } from 'react'
import {
  Platform,
  Animated,
  Dimensions,
  Keyboard,
  StyleSheet,
  TextInput,
  EmitterSubscription,
  KeyboardEvent,
} from 'react-native'
import { IWDRKeyboardShiftProps } from './WDRKeyboardShiftTypes'
import { height as responsiveHeight } from '@utils'

/**
 * @description IOS Custom implementation of KeyboardAvoidingView
 * The advantage of this implementation is that the content
 * raises exactly the focused element that triggers the keyboard
 * For android, this procedure is not required, since the OS can do it itself
 * @param {IWDRKeyboardShiftProps} props
 * @constructor
 */
const WDRKeyboardShift = (props: IWDRKeyboardShiftProps) => {
  const {
    children,
    style,
    disabledKeyboardDismiss = false,
    enabled = true,
    ...otherProps
  } = props

  // Animation start value
  const [shift] = useState(new Animated.Value(0))

  // Setting the keyboard listener to raise
  const [didShowListener, setDidShowListener] =
    useState<EmitterSubscription | null>()

  // Setting the keyboard listener to hide
  const [didHideListener, setDidHideListener] =
    useState<EmitterSubscription | null>()

  useEffect(() => {
    if (Platform.OS === 'ios' && enabled) {
      setDidShowListener(
        Keyboard.addListener('keyboardWillShow', handleKeyboardDidShow),
      )
      setDidHideListener(
        Keyboard.addListener('keyboardWillHide', handleKeyboardDidHide),
      )
    }
    return () => {
      if (didShowListener) {
        didShowListener.remove()
      }
      if (didHideListener) {
        didHideListener.remove()
      }
    }
  }, [])

  /**
   * @param {KeyboardEvent} event
   * @description Keyboard lift
   */
  const handleKeyboardDidShow = (event: KeyboardEvent) => {
    const { height: windowHeight } = Dimensions.get('window')
    const keyboardHeight = event.endCoordinates.height
    const currentlyFocusedInputRef = TextInput.State.currentlyFocusedInput()

    currentlyFocusedInputRef?.measure((x, y, width, height, pageX, pageY) => {
      const fieldHeight = height
      const fieldTop = pageY
      const spacing = responsiveHeight(5)
      const gap =
        windowHeight - keyboardHeight - (fieldTop + fieldHeight) - spacing
      if (gap >= 0) {
        return
      }

      Animated.timing(shift, {
        toValue: gap,
        duration: 500,
        useNativeDriver: true,
      }).start()
    })
  }

  /**
   *@description Touch handling on container area
   */
  const onResponderReleaseContainer = () => {
    Keyboard.dismiss()
  }

  /**
   * @description Getting permission to handle touch on a container
   * by default the method should always return true
   * @return {isKeyBoardDismiss}
   */
  const onStartShouldSetResponderContainer = (): boolean => {
    return !disabledKeyboardDismiss
  }

  /**
   * @description Hiding the keyboard
   */
  const handleKeyboardDidHide = () => {
    Animated.timing(shift, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start()
  }

  return (
    <Animated.View
      {...otherProps}
      style={StyleSheet.flatten([
        { transform: [{ translateY: shift }] },
        style,
      ])}
      onResponderRelease={onResponderReleaseContainer}
      onStartShouldSetResponder={onStartShouldSetResponderContainer}
    >
      {children}
    </Animated.View>
  )
}
export default WDRKeyboardShift
