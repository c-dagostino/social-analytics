import { combineReducers } from 'redux';
import appReducer from './app';
import tweetsReducer from './tweets';

const reducers = combineReducers({
  ...appReducer,
  twitter: tweetsReducer,
});

export default reducers;
