import { all } from 'redux-saga/effects';
import { tweetSagas } from './tweets';

export default function* rootSaga() {
  yield all([...tweetSagas]);
}
