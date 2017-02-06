import { combineReducers } from 'redux'
import ModalReducer from './ModalReducer'
import PostsReducer from './PostsReducer'
import ReadingScrollReducer from './ReadingScrollReducer'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

const reducers = combineReducers({
  ModalReducer,
  PostsReducer,
  ReadingScrollReducer,
  routing: routerReducer
})

export default reducers
