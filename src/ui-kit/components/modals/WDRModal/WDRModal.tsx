import React, { useEffect, useRef } from 'react'

import { IWDRModalTypes } from './WDRModalTypes'
import styles from './WDRModalStyles'
import {
  Animated,
  Modal as RNModal,
  Pressable,
  ScrollView,
  StyleSheet,
} from 'react-native'
import { WDRKeyboardShift } from '@ui-kit/components'

/**
 * @param {IWDRModalTypes} props
 * @return {JSX}
 */
const WDRModal = (props: IWDRModalTypes) => {
  const {
    children,
    isVisible = false,
    animationType = 'fade',
    closeHandler,
    containerStyles,
    isDisabledClose = false,
    enabledKeyboardShift,
  } = props

  const isSlideAnimationType = animationType === 'slide'
  const isAnimationDisabled = animationType === 'none'

  const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

  const fadeAnimation = useRef(new Animated.Value(0)).current
  const slideAnimation = useRef(new Animated.Value(500)).current

  /**
   * @description open animation func
   */
  const openAnimation = (): void => {
    Animated.timing(fadeAnimation, {
      toValue: 0.25,
      duration: 400,
      useNativeDriver: true,
    }).start()

    Animated.timing(slideAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start()
  }

  /**
   * @description close animation func
   */
  const closeAnimation = (): void => {
    Animated.timing(fadeAnimation, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true,
    }).start()

    Animated.timing(slideAnimation, {
      toValue: 500,
      duration: 300,
      useNativeDriver: true,
    }).start()
  }

  useEffect(() => {
    if (isSlideAnimationType && !isAnimationDisabled) {
      isVisible ? openAnimation() : closeAnimation()
    }
  }, [isVisible])

  return (
    <RNModal
      visible={isVisible}
      animationType={
        isSlideAnimationType || isAnimationDisabled ? 'none' : 'fade'
      }
      transparent
    >
      <WDRKeyboardShift style={styles.container} enabled={enabledKeyboardShift}>
        <AnimatedPressable
          style={StyleSheet.flatten([
            styles.background,
            !isAnimationDisabled &&
              isSlideAnimationType && { opacity: fadeAnimation },
          ])}
          onPress={!isDisabledClose ? closeHandler : undefined}
        />
        <Animated.View
          style={StyleSheet.flatten([
            styles.modal,
            containerStyles,
            !isAnimationDisabled &&
              isSlideAnimationType && {
                transform: [{ translateY: slideAnimation }],
              },
          ])}
        >
          <ScrollView>{children}</ScrollView>
        </Animated.View>
      </WDRKeyboardShift>
    </RNModal>
  )
}

export default WDRModal
