import { ACTIONS } from '../../constants';

export const initialState = {
  isLoading: false,
  error: null,
  user: null,
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.SET_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: action.isLoading,
      };
    case ACTIONS.SET_LOADING_AND_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: action.isLoading,
      };
    case ACTIONS.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
}

export default appReducer;
