import configureStore from './CreateStore'
import rootSaga from '../sagas'
import rootReducer from './reducers'

export default () => configureStore(rootReducer, rootSaga)
