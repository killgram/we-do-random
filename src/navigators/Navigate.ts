import NavigationService from './NavigationService'

/**
 * @description go back from history
 */
export const goBack = () => {
  NavigationService.back()
}
/**
 * @description main app stack
 */
export const toAppStack = () => {
  NavigationService.navigateAndReset('BottomTabStack')
}
/**
 * @description bottom stack
 */
export const toBottomTabStack = () => {
  NavigationService.navigate('BottomTabStack')
}

/**
 * @description to Template
 */
export const toTemplate = () => {
  NavigationService.navigate('TemplateScreen')
}

/**
 * @description to Blank
 */
export const toBlank = () => {
  NavigationService.navigate('BlankScreen')
}
