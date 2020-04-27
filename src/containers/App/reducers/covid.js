import { ACTIONS } from '../../constants';

export const initialState = {
  isLoading: false,
  dateId: null,
  error: null,
  all: [],
}

function covidReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.SET_COVID_DATA_LOADING_AND_ERROR:
      return {
        ...state,
        all: [],
        isLoading: false,
        error: action.error,
      };
    case ACTIONS.FETCH_COVID_DATA:
      return {
        ...state,
        all: [],
        isLoading: true,
        error: null,
      };
    case ACTIONS.FETCH_COVID_DATA_SUCCESS:
      return {
        ...state,
        all: action.data,
        dateId: action.dateId,
        isLoading: false,
        error: null,
      };
    default:
      return state;
  }
}

export default covidReducer;
