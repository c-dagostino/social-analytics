import { ACTIONS } from '../../constants';

const fetchTweetsSuccess = tweets => {
  return {
    type: ACTIONS.FETCH_TWEETS_SUCCESS,
    tweets,
  };
};

const fetchTweets = searchTerm => {
  return {
    type: ACTIONS.FETCH_TWEETS,
    searchTerm,
  };
};

const setTweetsLoadingError = error => {
  return {
    type: ACTIONS.SET_TWEETS_LOADING_AND_ERROR,
    error,
  };
};

const tweetActions = {
  fetchTweets,
  fetchTweetsSuccess,
  setTweetsLoadingError,
};
export default tweetActions;
