import 'babel-polyfill'
import { createAction } from 'redux-actions'
import { takeEvery, delay } from "redux-saga"
import { fork, take, put, call } from 'redux-saga/effects'

import { fetchPosts } from './fetchPosts'

export default function* loadPosts() {
  const posts = yield fetchPosts()
  yield put({type: 'LOAD_POSTS', posts})
}
