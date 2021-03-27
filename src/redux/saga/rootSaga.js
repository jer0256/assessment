import { all } from 'redux-saga/effects';
import { watchBlogSaga } from './blogSaga';

export default function* startRootSaga() {
  yield all([
    watchBlogSaga(),
  ]);
}