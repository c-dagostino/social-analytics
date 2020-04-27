import { createSelector } from 'reselect';

const selectApp = state => {
  const stateCopy = { ...state };
  return stateCopy.covid;
};

const makeSelectAllCovidData = () =>
  createSelector(selectApp, appState => appState.all);

const makeSelectCovidDataLoading = () =>
  createSelector(selectApp, appState => appState.isLoading);

const makeSelectCovidDataError = () =>
  createSelector(selectApp, appState => appState.error);

const makeSelectCovidDateId = () =>
  createSelector(selectApp, appState => appState.dateId);

const covidDataSelectors = {
  makeSelectAllCovidData,
  makeSelectCovidDataLoading,
  makeSelectCovidDataError,
  makeSelectCovidDateId,
};

export default covidDataSelectors;
