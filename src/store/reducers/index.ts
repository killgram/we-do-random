import { combineReducers } from 'redux'

import settingsReducer from './settings'
import appReducer from './app'
import profileReducer from './profile'
import friendsReducer from './friends'

const rootReducer = combineReducers({
  settings: settingsReducer,
  app: appReducer,
  profile: profileReducer,
  friends: friendsReducer,
})

export default rootReducer
