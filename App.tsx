import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import createStore from '@store'
import RootScreen from '@screens/Root'

const { store, persistor } = createStore()

/**
 * Application entry point
 * @constructor
 */
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootScreen />
      </PersistGate>
    </Provider>
  )
}

export default App
