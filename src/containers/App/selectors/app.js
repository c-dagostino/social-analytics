import { createSelector } from 'reselect';

const selectApp = state => {
  const stateCopy = { ...state };
  return stateCopy;
};

const makeSelectError = () =>
  createSelector(selectApp, appState => appState.error);

const makeSelectUser = () =>
  createSelector(selectApp, appState => appState.user);

const appSelectors = { makeSelectError, makeSelectUser }

export default appSelectors;
