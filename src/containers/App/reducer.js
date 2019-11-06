import {
 ACTIONS
} from '../constants';

export const initialState = {
  isLoading: false,
  error: null
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.SET_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: action.isLoading,
      }
    default:
      return state;
  }
}

export default appReducer;
