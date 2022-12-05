import { combineReducers } from 'redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { persistReducer } from 'redux-persist'

import settingsReducer from './settings'
import appReducer from './app'
import profileReducer from './profile'
import friendsReducer from './friends'
import gameReducer from './game'
import inviteReducer from './invite'

const appPersistConfig = {
  key: 'app',
  storage: AsyncStorage,
  blacklist: ['updateModal'],
}

const settingsPersistConfig = {
  key: 'settings',
  storage: AsyncStorage,
  blacklist: ['supportData', 'aboutApp'],
}

const rootReducer = combineReducers({
  settings: persistReducer(settingsPersistConfig, settingsReducer),
  app: persistReducer(appPersistConfig, appReducer),
  profile: profileReducer,
  friends: friendsReducer,
  game: gameReducer,
  invite: inviteReducer,
})

export default rootReducer
