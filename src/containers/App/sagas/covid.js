import { put, takeLatest, call } from 'redux-saga/effects';
import { ACTIONS } from '../../constants';
import actions from '../actions';
import request from '../../utils/request';

export function* fetchCovidData(action) {
  try {
    const data = yield call(
      request,
      process.env.REACT_APP_FETCH_COVID_DATA_URL,
    );
    yield put(actions.fetchCovidDataSuccess(data, action.dateId));
  } catch (err) {
    yield put(actions.setCovidDataLoadingError(err));
  }
}

export function* watchFetchCovidData() {
  yield takeLatest(ACTIONS.FETCH_COVID_DATA, fetchCovidData);
}

export const covidSagas = [watchFetchCovidData()];
