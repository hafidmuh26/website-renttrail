import {
  FIND_PARTNERS_SUCCESS,
  FIND_PARTNERS_REQUEST,
  FIND_PARTNERS_FAILURE,
} from "../constants/partners";

const defaultState = { data: null, loading: false, error: null };

export function findPartners(state = defaultState, action) {
  switch (action.type) {
    case FIND_PARTNERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FIND_PARTNERS_SUCCESS:
      return {
        data: action.data,
        loading: false,
        error: null,
      };
    case FIND_PARTNERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
