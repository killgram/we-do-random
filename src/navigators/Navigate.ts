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
 * @description rules stack
 */
export const toRulesStack = () => {
  NavigationService.navigateAndReset('RulesStack')
}

/**
 * @description profile stack
 */
export const toProfileStack = () => {
  NavigationService.navigateAndReset('ProfileStack')
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
 * @description to Blank
 */
export const toBlank = () => {
  NavigationService.navigate('GameStack', { screen: 'BlankScreen' })
}

//-------------------Other-------------------------//

/**
 * @description bottom stack
 */
export const toBottomTabStack = () => {
  NavigationService.navigate('BottomTabStack')
}
