import { ListRenderItem } from 'react-native'
import { ReactElement } from 'react'
import { RNStyleType } from '@utils'

interface IObject {
  [key: string]: any
}

export interface IWDRListTypes {
  listItems?: Array<IObject>
  renderListItem?: ListRenderItem<IObject>
  listEmptyComponent?: ReactElement
  isBounces?: boolean
  onRefresh?: () => void
  isRefreshing?: boolean
  isLoadingMore?: boolean
  onLoadMore?: () => void
  listStyles?: RNStyleType
  contentContainerStyles?: RNStyleType
  titleEmptyComponent?: string
  contentElementEmptyComponent?: JSX.Element
}
