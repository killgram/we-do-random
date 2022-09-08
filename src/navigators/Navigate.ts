import NavigationService from './NavigationService'
import PhraseListScreen from '@screens/PhraseList/PhraseList'

//-------------------To stacks-------------------//

/**
 * @description auth stack
 */
export const toAuthStack = () => {
  NavigationService.navigateAndReset('AuthStack')
}

/**
 * @description app stack
 */
export const toAppStack = () => {
  NavigationService.navigateAndReset('BottomTabStack')
}

/**
 * @description game stack
 */
export const toGameStack = () => {
  NavigationService.navigateAndReset('GameStack')
}

/**
 * @description settings stack
 */
export const toSettingsStack = () => {
  NavigationService.navigateAndReset('SettingsStack')
}

//-------------------Service---------------------//

/**
 * @description go back from history
 */
export const goBack = () => {
  NavigationService.back()
}

//-------------------GameStack---------------------//

/**
 * @description to CreateGameScreen
 * @param {"single"|"team"} type
 */
export const toCreateGameScreen = (type: 'single' | 'team') => {
  NavigationService.navigate('GameStack', {
    screen: 'CreateGameScreen',
    params: {
      type,
    },
  })
}

/**
 * @description to FriendListScreen
 */
export const toFriendListScreen = () => {
  NavigationService.navigate('GameStack', {
    screen: 'FriendListScreen',
  })
}

/**
 * @description to PhraseListScreen
 */
export const toPhraseListScreen = () => {
  NavigationService.navigate('GameStack', {
    screen: 'PhraseListScreen',
  })
}

//-------------------SettingsStack---------------------//

/**
 * @description to ChangeLanguageScreen
 */
export const toChangeLanguageScreen = () => {
  NavigationService.navigate('SettingsStack', {
    screen: 'ChangeLanguageScreen',
  })
}

/**
 * @description to AboutAppScreen
 */
export const toAboutAppScreen = () => {
  NavigationService.navigate('SettingsStack', {
    screen: 'AboutAppScreen',
  })
}

/**
 * @description to SupportScreen
 */
export const toSupportScreen = () => {
  NavigationService.navigate('SettingsStack', {
    screen: 'SupportScreen',
  })
}

//-------------------Other-------------------------//
