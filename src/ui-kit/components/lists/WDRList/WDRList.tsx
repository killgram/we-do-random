import React from 'react'
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  View,
} from 'react-native'
import { IWDRListTypes } from './WDRListTypes'
import styles from './WDRListStyles'
import { PanelContentWaiting } from '@components/PanelContentWaiting'
import { getThemeColor } from '@utils'

/**
 * @return { JSX }
 * @param { IWDRListTypes } props
 */
const WDRList = (props: IWDRListTypes) => {
  const {
    listItems,
    renderListItem,
    listEmptyComponent,
    isBounces = false,
    onRefresh,
    isRefreshing,
    isLoadingMore,
    onLoadMore,
    listStyles,
    contentContainerStyles,
    titleEmptyComponent,
    contentElementEmptyComponent,
  } = props

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={listItems?.length ? listItems : []}
      removeClippedSubviews={false}
      bounces={isBounces}
      renderItem={renderListItem}
      keyExtractor={(item, index) => `key-${index}`}
      contentContainerStyle={StyleSheet.flatten([
        styles.contentContainer,
        contentContainerStyles,
      ])}
      ListEmptyComponent={
        !isRefreshing
          ? listEmptyComponent || (
              <PanelContentWaiting
                title={titleEmptyComponent}
                contentElement={contentElementEmptyComponent}
              />
            )
          : null
      }
      ListFooterComponent={
        isLoadingMore && !isRefreshing ? (
          <View style={styles.refreshingIndicatorStyle}>
            <ActivityIndicator
              size="small"
              color={getThemeColor('ACTIVITY_INDICATOR')}
            />
          </View>
        ) : null
      }
      onEndReached={() => {
        if (!isRefreshing && !isLoadingMore && onLoadMore) {
          onLoadMore()
        }
      }}
      onEndReachedThreshold={0.3}
      style={listStyles}
      refreshControl={
        onRefresh && (
          <RefreshControl
            title={'Loading...'}
            refreshing={isRefreshing || false}
            onRefresh={onRefresh}
            colors={[getThemeColor('ACTIVITY_INDICATOR')]}
            tintColor={getThemeColor('ACTIVITY_INDICATOR')}
            titleColor={getThemeColor('ACTIVITY_INDICATOR')}
          />
        )
      }
    />
  )
}

export default WDRList
