import React from 'react'
import getStyle from './RulesMainStyles'
import { WDRContainer, WDRText } from '@ui-kit/components'
import { useTranslation } from 'react-i18next'
import { ScrollView } from 'react-native'
import RulesItem from '@components/RulesItem'
import { keyGenerate } from '@utils'

/**
 * @description RulesMainScreen
 * @return {JSX}
 */
const RulesMainScreen = () => {
  const styles = getStyle()
  const { t } = useTranslation()

  const rulesData = [
    {
      header: t('rulesScreen.t1.header'),
      desc: t('rulesScreen.t1.desc'),
    },
    {
      header: t('rulesScreen.t2.header'),
      desc: t('rulesScreen.t2.desc'),
    },
    {
      header: t('rulesScreen.t3.header'),
      desc: t('rulesScreen.t3.desc'),
    },
    {
      header: t('rulesScreen.t4.header'),
      desc: t('rulesScreen.t4.desc'),
    },
    {
      header: t('rulesScreen.t5.header'),
      desc: t('rulesScreen.t5.desc'),
    },
    {
      header: t('rulesScreen.t6.header'),
      desc: t('rulesScreen.t6.desc'),
    },
  ]

  const renderRules = () => {
    return rulesData.map((item) => {
      return (
        <RulesItem key={keyGenerate()} header={item.header} desc={item.desc} />
      )
    })
  }

  return (
    <WDRContainer isKeyBoardDismiss={false}>
      <WDRText isSecondary style={styles.rulesTitle}>
        {t('rulesScreen.rules')}
      </WDRText>

      <ScrollView showsVerticalScrollIndicator={false}>
        {renderRules()}
      </ScrollView>
    </WDRContainer>
  )
}

export default RulesMainScreen
