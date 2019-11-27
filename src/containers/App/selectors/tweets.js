import { createSelector } from 'reselect';

const selectApp = state => {
  const stateCopy = { ...state };
  return stateCopy.twitter;
};

const makeSelectTweets = () =>
  createSelector(selectApp, appState => appState.tweets);

const makeSelectTweetsLoading = () =>
  createSelector(selectApp, appState => appState.isLoading);

const makeSelectTweetsError = () =>
  createSelector(selectApp, appState => appState.error);

const tweetSelectors = {
  makeSelectTweets,
  makeSelectTweetsLoading,
  makeSelectTweetsError,
};

export default tweetSelectors;
