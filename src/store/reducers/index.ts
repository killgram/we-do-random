import { combineReducers } from 'redux'

import settingsReducer from './settings'
import appReducer from './app'
import profileReducer from './profile'

const rootReducer = combineReducers({
  settings: settingsReducer,
  app: appReducer,
  profile: profileReducer,
})

export default rootReducer
