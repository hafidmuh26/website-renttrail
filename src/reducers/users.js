import {
  DELETE_USER_FAILURE,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  FIND_USERS_FAILURE,
  FIND_USERS_REQUEST,
  FIND_USERS_SUCCESS,
  FIND_USER_FAILURE,
  FIND_USER_REQUEST,
  FIND_USER_SUCCESS,
  SAVE_USER_FAILURE,
  SAVE_USER_REQUEST,
  SAVE_USER_SUCCESS,
} from "../constants/users";

const defaultState = { data: null, loading: false, error: null };

export function findUsers(state = defaultState, action) {
  switch (action.type) {
    case FIND_USERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FIND_USERS_SUCCESS:
      return {
        data: action.data,
        loading: false,
        error: null,
      };
    case FIND_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export function findUserById(state = defaultState, action) {
  switch (action.type) {
    case FIND_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FIND_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case FIND_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export function deleteUserById(state = defaultState, action) {
  switch (action.type) {
    case DELETE_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case DELETE_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export function saveUser(state = defaultState, action) {
  switch (action.type) {
    case SAVE_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SAVE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case SAVE_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
