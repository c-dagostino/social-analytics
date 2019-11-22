import { createSelector } from 'reselect';

const selectApp = state => {
  const stateCopy = { ...state };
  return stateCopy.twitter;
};

const makeSelectTweets = () =>
  createSelector(selectApp, appState => appState.tweets);

const makeSelectTweetsLoading = () =>
  createSelector(selectApp, appState => appState.isLoading);

const tweetSelectors = { makeSelectTweets, makeSelectTweetsLoading };

export default tweetSelectors;
