import { combineReducers } from 'redux'

import settingsReducer from './settings'
import appReducer from './app'
import profileReducer from './profile'
import friendsReducer from './friends'
import gameReducer from './game'
import inviteReducer from './invite'

const rootReducer = combineReducers({
  settings: settingsReducer,
  app: appReducer,
  profile: profileReducer,
  friends: friendsReducer,
  game: gameReducer,
  invite: inviteReducer,
})

export default rootReducer
