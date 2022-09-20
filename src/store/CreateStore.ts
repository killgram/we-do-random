import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistReducer, persistStore } from 'redux-persist'
import logger from 'redux-logger'
import AsyncStorage from '@react-native-async-storage/async-storage'
import RootState from './reducers'
import { RootSaga } from '@sagas'

const persistConfig = {
  key: 'rootStore',
  storage: AsyncStorage,
  whitelist: ['settings', 'profile', 'friends', 'game'],
  blacklist: ['app'],
}

export default (rootReducer: typeof RootState, rootSaga: RootSaga) => {
  const middleware: any = []
  const enhancers: any = []
  if (process.env.NODE_ENV === `development`) {
    middleware.push(logger)
  }
  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)
  enhancers.push(applyMiddleware(...middleware))
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  const store = createStore(persistedReducer, {}, compose<any>(...enhancers))
  const persistor = persistStore(store)
  sagaMiddleware.run(rootSaga)

  return { store, persistor }
}
