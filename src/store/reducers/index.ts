import { combineReducers } from 'redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { persistReducer } from 'redux-persist'

import settingsReducer from './settings'

/**
 * this is necessary in order not to download
 * in persist some options from settings
 */
const settingsPersistConfig = {
  key: 'settings',
  storage: AsyncStorage,
  blacklist: [],
}

const rootReducer = combineReducers({
  settings: persistReducer(settingsPersistConfig, settingsReducer),
})

export type BaseRootStateType = ReturnType<typeof rootReducer>
export type ReducerType = typeof rootReducer

export default rootReducer
