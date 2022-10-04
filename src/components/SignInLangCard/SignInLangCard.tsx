import React from 'react'
import getStyle from './SignInLangCardStyles'
import { WDRText } from '@ui-kit/components'
import { ISignInLangCardProps } from './SignInLangCardTypes'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'

/**
 * @description SignInLangCard
 * @param {ISignInLangCardProps} props
 * @return {JSX}
 */
const SignInLangCard = (props: ISignInLangCardProps) => {
  const { name, img, isActive, changeLang, langTag } = props

  const styles = getStyle()

  /**
   * @description handle change lang
   */
  const handleChangeLang = () => {
    if (!isActive) {
      changeLang?.(langTag)
    }
  }

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={handleChangeLang}
    >
      <Image
        source={img}
        style={StyleSheet.flatten([
          styles.flagImage,
          isActive && styles.activeFlagImage,
        ])}
      />
      <WDRText
        size={16}
        style={StyleSheet.flatten([isActive && styles.activeContainer])}
      >
        {name}
      </WDRText>
    </TouchableOpacity>
  )
}

export default SignInLangCard
