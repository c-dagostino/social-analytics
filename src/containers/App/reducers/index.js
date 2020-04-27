import { combineReducers } from 'redux';
import appReducer from './app';
import tweetsReducer from './tweets';
import covidReducer from './covid';

const reducers = combineReducers({
  ...appReducer,
  twitter: tweetsReducer,
  covid: covidReducer,
});

export default reducers;
