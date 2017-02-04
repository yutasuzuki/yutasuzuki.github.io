import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import reducer from '../reducers'
import PostsReducer from '../reducers/PostsReducer'
import ModalReducer from '../reducers/ModalReducer'
import rootSaga from '../sagas'

const initialState = {}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(
    sagaMiddleware,
    logger()
  )
)

sagaMiddleware.run(rootSaga)

export default store
