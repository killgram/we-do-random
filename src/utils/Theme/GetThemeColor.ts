import { LightColors } from '@ui-kit/styles'
import { IThemes, ThemeType } from '@utils'

const themes: IThemes = {
  light: { ...LightColors },
}

/**
 * @description A function to get the color depending on the installed
 * theme in the application. If the theme parameter is not passed,
 * the colors will be drawn from the default theme
 * @param {string} color
 * @param {string} theme
 * @return {string}
 */
export const getThemeColor = (
  color: string,
  theme: ThemeType = 'light',
): string => {
  return themes[theme][color]
}

/**
 * @description A function to get an array of theme gradients in the
 * application. If the theme parameter is not passed, the colors
 * will be drawn from the default theme
 * @param {Array<string>} colors
 * @param {string} theme
 * @return {Array<string>}
 */
export const getThemeGradient = (
  colors: Array<string>,
  theme: ThemeType = 'light',
): Array<string> => {
  return colors.map((color) => getThemeColor(color, theme))
}
