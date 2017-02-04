import 'babel-polyfill';
import { createAction } from 'redux-actions';
import { takeEvery, delay } from "redux-saga";
import { fork, take, put, call } from 'redux-saga/effects';

import { fetchPosts } from './fetchPosts';

export default function* loadPosts() {
  const posts = yield fetchPosts();
  yield put({type: 'LOAD_POSTS', posts})
}





















// export const FETCH_ITEMS = 'FetchItems';
// export const FETCH_ITEMS_SUCCESS = 'FetchItemsSuccess';
// export const FETCH_ITEMS_FAIL = 'FetchItemsFail';
//
// export const fetchItems = createAction(FETCH_ITEMS);
// export const fetchItemsSuccess = createAction(FETCH_ITEMS_SUCCESS, payload => payload);
// export const fetchItemsFail = createAction(FETCH_ITEMS_FAIL, err => err);
//
// export function fetchFeedItems() {
//   return (
//     axios.get('https://rallycoding.herokuapp.com/api/music_albums')
//       .then((res) => {
//         console.log(res)
//         const payload = res.data;
//         return { payload };
//       })
//       .catch((err) => {
//         return { err };
//       })
//   );
// }
//
// function* fetchItemsAsync() {
//   console.log('fetchItemsAsync :: start')
//   // console.log('take(FETCH_ITEMS)',yield take(FETCH_ITEMS))
//   // TODO: yieldが動かない
//   yield call(delay, 5000);
//   const action = take(FETCH_ITEMS);
//   const { payload, err } = yield call(fetchFeedItems, action.payload);
//   console.log('action', action)
//   console.log('payload', payload)
//   console.log('err', err)
//   console.log('fetchItemsSuccess(payload)', fetchItemsSuccess(payload))
//   console.log('fetchItemsFail(err)', fetchItemsFail(err))
//   if (payload && !err) {
//     yield put(fetchItemsSuccess(payload));
//   } else {
//     yield put(fetchItemsFail(err));
//   }
//   console.log('fetchItemsAsync :: end')
// }
//
// function* fetchItemsAsync() {
//   //while(true) {
//     const action = take(FETCH_ITEMS)
//     console.log(action)
//   //}
// }
//
// export default function* rootSaga() {
//   yield fork(fetchItemsAsync)
// }
