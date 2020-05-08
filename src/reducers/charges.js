import {
  DELETE_CHARGE_FAILURE,
  DELETE_CHARGE_REQUEST,
  DELETE_CHARGE_SUCCESS,
  FIND_CHARGES_FAILURE,
  FIND_CHARGES_REQUEST,
  FIND_CHARGES_SUCCESS,
  FIND_CHARGE_FAILURE,
  FIND_CHARGE_REQUEST,
  FIND_CHARGE_SUCCESS,
  SAVE_CHARGE_FAILURE,
  SAVE_CHARGE_REQUEST,
  SAVE_CHARGE_SUCCESS,
} from "../constants/charges";

const defaultState = { data: null, loading: false, error: null };

export function deleteChargeById(state = defaultState, action) {
  switch (action.type) {
    case DELETE_CHARGE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case DELETE_CHARGE_SUCCESS:
      return {
        data: action.data,
        loading: false,
        error: null,
      };
    case DELETE_CHARGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export function findChargeById(state = defaultState, action) {
  switch (action.type) {
    case FIND_CHARGE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FIND_CHARGE_SUCCESS:
      return {
        data: action.data,
        loading: false,
        error: null,
      };
    case FIND_CHARGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export function findCharges(state = defaultState, action) {
  switch (action.type) {
    case FIND_CHARGES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FIND_CHARGES_SUCCESS:
      return {
        data: action.data,
        loading: false,
        error: null,
      };
    case FIND_CHARGES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export function saveCharge(state = defaultState, action) {
  switch (action.type) {
    case SAVE_CHARGE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SAVE_CHARGE_SUCCESS:
      return {
        data: action.data,
        loading: false,
        error: null,
      };
    case SAVE_CHARGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
