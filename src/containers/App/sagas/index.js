import { all } from 'redux-saga/effects';
import { tweetSagas } from './tweets';
import { covidSagas } from './covid';

export default function* rootSaga() {
  yield all([...tweetSagas, ...covidSagas]);
}
