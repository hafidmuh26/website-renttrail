import {
  DELETE_PENDINGITEM_FAILURE,
  DELETE_PENDINGITEM_REQUEST,
  DELETE_PENDINGITEM_SUCCESS,
  FIND_PENDINGITEMS_FAILURE,
  FIND_PENDINGITEMS_REQUEST,
  FIND_PENDINGITEMS_SUCCESS,
  FIND_PENDINGITEM_FAILURE,
  FIND_PENDINGITEM_REQUEST,
  FIND_PENDINGITEM_SUCCESS,
  SAVE_PENDINGITEM_FAILURE,
  SAVE_PENDINGITEM_REQUEST,
  SAVE_PENDINGITEM_SUCCESS,
} from "../constants/pendingItems";

const defaultState = { data: null, loading: false, error: null };

export function deletePendingItemById(state = defaultState, action) {
  switch (action.type) {
    case DELETE_PENDINGITEM_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case DELETE_PENDINGITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case DELETE_PENDINGITEM_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export function findPendingItemById(state = defaultState, action) {
  switch (action.type) {
    case FIND_PENDINGITEM_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FIND_PENDINGITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case FIND_PENDINGITEM_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export function findPendingItems(state = defaultState, action) {
  switch (action.type) {
    case FIND_PENDINGITEMS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FIND_PENDINGITEMS_SUCCESS:
      return {
        data: action.data,
        loading: false,
        error: null,
      };
    case FIND_PENDINGITEMS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export function savePendingItem(state = defaultState, action) {
  switch (action.type) {
    case SAVE_PENDINGITEM_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SAVE_PENDINGITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case SAVE_PENDINGITEM_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
