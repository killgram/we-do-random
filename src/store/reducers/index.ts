import { combineReducers } from 'redux'

import settingsReducer from './settings'
import appReducer from './app'
import profileReducer from './profile'
import friendsReducer from './friends'
import gameReducer from './game'

const rootReducer = combineReducers({
  settings: settingsReducer,
  app: appReducer,
  profile: profileReducer,
  friends: friendsReducer,
  game: gameReducer,
})

export default rootReducer
