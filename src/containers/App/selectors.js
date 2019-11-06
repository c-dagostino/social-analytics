import {createSelector} from 'reselect';

const selectApp = state => {
    const stateCopy = { ...state };
    return stateCopy.app;
  };

const makeSelectError = () => createSelector(
    selectApp,
    appState => appState.error,
);

export {
    makeSelectError
}