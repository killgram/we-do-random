import { ImageSourcePropType } from 'react-native'

export interface ISignInLangCardProps {
  name: string
  img: ImageSourcePropType
  langTag: string
  isActive?: boolean
  changeLang?: (lang: string) => void
}
