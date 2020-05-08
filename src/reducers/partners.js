import {
  FIND_PARTNERS_REQUEST,
  FIND_PARTNERS_SUCCESS,
  FIND_PARTNERS_FAILURE,
  FIND_PARTNER_REQUEST,
  FIND_PARTNER_SUCCESS,
  FIND_PARTNER_FAILURE,
  DELETE_PARTNER_REQUEST,
  DELETE_PARTNER_SUCCESS,
  DELETE_PARTNER_FAILURE,
  SAVE_PARTNER_REQUEST,
  SAVE_PARTNER_SUCCESS,
  SAVE_PARTNER_FAILURE,
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

export function findPartnerById(state = defaultState, action) {
  switch (action.type) {
    case FIND_PARTNER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FIND_PARTNER_SUCCESS:
      return {
        data: action.data,
        loading: false,
        error: null,
      };
    case FIND_PARTNER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export function deletePartnerById(state = defaultState, action) {
  switch (action.type) {
    case DELETE_PARTNER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case DELETE_PARTNER_SUCCESS:
      return {
        data: action.data,
        loading: false,
        error: null,
      };
    case DELETE_PARTNER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export function savePartner(state = defaultState, action) {
  switch (action.type) {
    case SAVE_PARTNER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SAVE_PARTNER_SUCCESS:
      return {
        data: action.data,
        loading: false,
        error: null,
      };
    case SAVE_PARTNER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
