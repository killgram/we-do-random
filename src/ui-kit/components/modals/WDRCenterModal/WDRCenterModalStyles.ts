import { StyleSheet } from 'react-native'
import { getThemeColor, height, radius, RNStyleType } from '@utils'

interface IStyles {
  modalContainer: RNStyleType
  modal: RNStyleType
}

/**
 *
 * @return {IStyles}
 */
const getStyle = (): IStyles => {
  return StyleSheet.create({
    modalContainer: {
      alignSelf: 'center',
    },
    modal: {
      backgroundColor: getThemeColor('MODAL_CONTAINER_BACKGROUND'),
      width: height(305),
      padding: height(45),
      borderRadius: radius(15),
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
}

export default getStyle
