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
  whitelist: [],
  blacklist: [],
}

export default (rootReducer: typeof RootState, rootSaga: RootSaga) => {
  const middleware = []
  const enhancers = []
  if (process.env.NODE_ENV === `development`) {
    middleware.push(logger)
  }

  // Connect the sagas to the redux store
  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)
  enhancers.push(applyMiddleware(...middleware))

  // Redux persist
  const persistedReducer = persistReducer(persistConfig, rootReducer)

  const store = createStore(persistedReducer, {}, compose(...enhancers))
  const persistor = persistStore(store)

  // Kick off the root saga
  sagaMiddleware.run(rootSaga)

  return { store, persistor }
}
