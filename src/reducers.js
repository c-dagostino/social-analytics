import { combineReducers } from 'redux';
import appReducer from './containers/App/reducer'
const reducers = combineReducers({
  app: appReducer
});

export default reducers;
