import { Dimensions, PixelRatio } from 'react-native'

/**
 * Get the size of the visible screen
 */
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

/**
 * Reference screen size (logical size)
 */
const referenceHeight = 896
const referenceWidth = 414

/**
 *
 * @param {number} value  Int input px value
 * @return {number} Converted value based on screen size
 */
export const height = (value = 0): number => {
  const validValue = Math.abs(value > referenceHeight ? referenceHeight : value)
  return PixelRatio.roundToNearestPixel(
    (validValue / referenceHeight) * screenHeight,
  )
}
/**
 *
 * @param {number} value Int input px value
 * @return {number} Converted value based on screen size
 */
export const width = (value = 0): number => {
  const validValue = Math.abs(value > referenceWidth ? referenceWidth : value)
  return PixelRatio.roundToNearestPixel(
    (validValue / referenceWidth) * screenWidth,
  )
}
/**
 *
 * @description - we always use it for fonts
 * @param {number} value Int input px value
 * @return {number} Converted value based on screen size
 */
export const sp = (value = 0): number => {
  const validValue = Math.abs(value > referenceHeight ? referenceHeight : value)
  return PixelRatio.roundToNearestPixel(
    (validValue / referenceHeight) * screenHeight,
  )
}

/**
 *
 * @description - we always use it for radii
 * @param {number} value Int input px value
 * @return {number} Converted value based on screen size
 */
export const radius = (value = 0): number => {
  const validValue = Math.abs(value > referenceHeight ? referenceHeight : value)
  return PixelRatio.roundToNearestPixel(
    (validValue / referenceHeight) * screenHeight,
  )
}

export { screenWidth, screenHeight }
