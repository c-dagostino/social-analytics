import { ACTIONS } from '../constants';

export function setError(error) {
  return {
    type: ACTIONS.SET_ERROR,
    error
  };
}

export function setUser(user) {
  return {
    type: ACTIONS.SET_USER,
    user
  };
}

