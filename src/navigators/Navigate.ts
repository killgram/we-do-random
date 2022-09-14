import NavigationService from './NavigationService'

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
 * @description to AddFriendScreen
 */
export const toAddFriendScreen = () => {
  NavigationService.navigate('GameStack', {
    screen: 'AddFriendScreen',
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

/**
 * @description to AddPhrase
 */
export const toAddPhrase = () => {
  NavigationService.navigate('GameStack', {
    screen: 'AddPhrase',
  })
}

/**
 * @description to SingleGameBoard
 */
export const toSingleGameBoard = () => {
  NavigationService.navigate('GameStack', {
    screen: 'SingleGameBoard',
  })
}

/**
 * @description to TeamGameInvitePlayers
 */
export const toTeamGameInvitePlayers = () => {
  NavigationService.navigate('GameStack', {
    screen: 'TeamGameInvitePlayers',
  })
}

/**
 * @description to TeamGameBoard
 */
export const toTeamGameBoard = () => {
  NavigationService.navigate('GameStack', {
    screen: 'TeamGameBoard',
  })
}

/**
 * @description to AddPhraseIntoGameScreen
 */
export const toAddPhraseIntoGameScreen = () => {
  NavigationService.navigate('GameStack', {
    screen: 'AddPhraseIntoGameScreen',
  })
}

/**
 * @description to AddPlayersIntoGame
 */
export const toAddPlayersIntoGame = () => {
  NavigationService.navigate('GameStack', {
    screen: 'AddPlayersIntoGame',
  })
}

/**
 * @description to AddFriendIntoGameScreen
 * @param {(s: string) => void} goBackScreen
 */
export const toAddFriendIntoGameScreen = (
  goBackScreen: (s: string) => void,
) => {
  NavigationService.navigate('GameStack', {
    screen: 'AddFriendIntoGameScreen',
    params: {
      goBackScreen,
    },
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

/**
 * @description to QRCodeScanScreen
 * @param {(s: string) => void} goBackScreen
 */
export const toQRCodeScanScreen = (goBackScreen: (s: string) => void) => {
  NavigationService.navigate('QRCodeScanScreen', {
    goBackScreen,
  })
}

/**
 * @description to GameResultScreen
 */
export const toGameResultScreen = () => {
  NavigationService.navigate('GameResultScreen')
}
