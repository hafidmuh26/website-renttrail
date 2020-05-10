import {
  DELETE_RENT_FAILURE,
  DELETE_RENT_REQUEST,
  DELETE_RENT_SUCCESS,
  FIND_RENTS_FAILURE,
  FIND_RENTS_REQUEST,
  FIND_RENTS_SUCCESS,
  FIND_RENT_FAILURE,
  FIND_RENT_REQUEST,
  FIND_RENT_SUCCESS,
  SAVE_RENT_FAILURE,
  SAVE_RENT_REQUEST,
  SAVE_RENT_SUCCESS,
} from "../constants/rents";

const defaultState = { data: null, loading: false, error: null };

export function deleteRentById(state = defaultState, action) {
  switch (action.type) {
    case DELETE_RENT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case DELETE_RENT_SUCCESS:
      return {
        data: action.data,
        loading: false,
        error: null,
      };
    case DELETE_RENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export function findRentById(state = defaultState, action) {
  switch (action.type) {
    case FIND_RENT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FIND_RENT_SUCCESS:
      return {
        data: action.data,
        loading: false,
        error: null,
      };
    case FIND_RENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export function findRents(state = defaultState, action) {
  switch (action.type) {
    case FIND_RENTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FIND_RENTS_SUCCESS:
      return {
        data: action.data,
        loading: false,
        error: null,
      };
    case FIND_RENTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export function saveRent(state = defaultState, action) {
  switch (action.type) {
    case SAVE_RENT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SAVE_RENT_SUCCESS:
      return {
        data: action.data,
        loading: false,
        error: null,
      };
    case SAVE_RENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
