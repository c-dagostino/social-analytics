import { put, takeLatest, call } from 'redux-saga/effects';
import { ACTIONS } from '../../constants';
import actions from '../actions';
import request from '../../utils/request';

export function* fetchTweets(action) {

  try {
    const tweets = yield call(
      request,
      `${process.env.REACT_APP_FETCH_TWEETS_URL}?searchterm=${action.searchTerm}`,
    );
    yield put({
      type: ACTIONS.FETCH_TWEETS_SUCCESS,
      tweets,
    });
  } catch (err) {
    yield put(actions.setTweetsLoadingError(err));
  }
}

export function* watchFetchTweets() {
  yield takeLatest(ACTIONS.FETCH_TWEETS, fetchTweets);
}

export const tweetSagas = [watchFetchTweets()];
