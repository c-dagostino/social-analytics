import { ACTIONS } from '../../constants';

const setError = error => {
  return {
    type: ACTIONS.SET_ERROR,
    error,
  };
};

const setLoadingAndError = error => {
  return {
    type: ACTIONS.SET_LOADING_AND_ERROR,
    error,
  };
};

const setUser = user => {
  return {
    type: ACTIONS.SET_USER,
    user,
  };
};

const appActions = {
  setError,
  setUser,
  setLoadingAndError,
};
export default appActions;

