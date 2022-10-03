import React from 'react'
import { ISupportHelpItemProps } from './SupportHelpItemTypes'
import getStyle from './SupportHelpItemStyles'
import { WDRIcon, WDRPressableCombineItem, WDRText } from '@ui-kit/components'

const SupportHelpItem = (props: ISupportHelpItemProps) => {
  const { title, onPress, extractor } = props
  const styles = getStyle()

  const handlePress = () => {
    onPress(extractor)
  }

  return (
    <WDRPressableCombineItem
      onPress={handlePress}
      bodyElement={
        <WDRText isSecondary isTitle>
          {title}
        </WDRText>
      }
      noPadding
      rightElement={<WDRIcon iconName="copy" />}
      style={styles.container}
    />
  )
}

export default SupportHelpItem
