import React from 'react'
import { ISupportHelpItemProps } from './SupportHelpItemTypes'
import getStyle from './SupportHelpItemStyles'
import { WDRIcon, WDRPressableCombineItem, WDRText } from '@ui-kit/components'

/**
 * @description support help item
 * @param {ISupportHelpItemProps} props
 * @constructor
 */
const SupportHelpItem = (props: ISupportHelpItemProps) => {
  const { title, onPress, extractor } = props
  const styles = getStyle()

  /**
   * @description handle press func
   */
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
