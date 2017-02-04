import { combineReducers } from 'redux'
import ModalReducer from './ModalReducer'
import PostsReducer from './PostsReducer'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

const reducers = combineReducers({
  ModalReducer,
  PostsReducer,
  routing: routerReducer
})

export default reducers
