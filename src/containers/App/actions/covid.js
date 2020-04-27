import { ACTIONS } from '../../constants';

const fetchCovidDataSuccess = (data, dateId) => {
  return {
    type: ACTIONS.FETCH_COVID_DATA_SUCCESS,
    data,
    dateId,
  };
};

const fetchCovidData = dateId => {
  return {
    type: ACTIONS.FETCH_COVID_DATA,
    dateId,
  };
};

const setCovidDataLoadingError = error => {
  return {
    type: ACTIONS.SET_COVID_DATA_LOADING_AND_ERROR,
    error,
  };
};

const covidActions = {
  fetchCovidDataSuccess,
  fetchCovidData,
  setCovidDataLoadingError,
};
export default covidActions;
