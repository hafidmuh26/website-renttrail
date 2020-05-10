import { commonAxios } from "../utils/apiUtils";
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

export const deleteById = (id) => (dispatch) => {
  dispatch({ type: DELETE_CHARGE_REQUEST });

  commonAxios
    .delete(`charges/${id}`)
    .then((data) => {
      dispatch(deleteChargeSuccess(data));
    })
    .catch((error) => {
      dispatch(deleteChargeFailure(error));
    });
};
function deleteChargeSuccess(data) {
  return {
    type: DELETE_CHARGE_SUCCESS,
    data: data,
  };
}
function deleteChargeFailure(error) {
  return {
    type: DELETE_CHARGE_FAILURE,
    error: error,
  };
}

export const findById = (id) => (dispatch) => {
  dispatch({ type: FIND_CHARGE_REQUEST });

  commonAxios
    .get(`charges/${id}`)
    .then((data) => {
      dispatch(findChargeSuccess(data));
    })
    .catch((error) => {
      dispatch(findChargeFailure(error));
    });
};
function findChargeSuccess(data) {
  return {
    type: FIND_CHARGE_SUCCESS,
    data: data,
  };
}
function findChargeFailure(error) {
  return {
    type: FIND_CHARGE_FAILURE,
    error: error,
  };
}

export const findAll = ({
  search = {},
  sort = "asc",
  page = 0,
  size = 5,
} = {}) => (dispatch) => {
  dispatch({ type: FIND_CHARGES_REQUEST });

  commonAxios
    .get("charges", { params: { ...search, sort, page, size } })
    .then((data) => {
      dispatch(findChargesSuccess(data));
    })
    .catch((error) => {
      dispatch(findChargesFailure(error));
    });
};
function findChargesSuccess(data) {
  return {
    type: FIND_CHARGES_SUCCESS,
    data: data,
  };
}
function findChargesFailure(error) {
  return {
    type: FIND_CHARGES_FAILURE,
    error: error,
  };
}

export const save = (model) => (dispatch) => {
  dispatch({ type: SAVE_CHARGE_REQUEST });

  const request = model.id
    ? commonAxios.put(`charges/${model.id}`, model)
    : commonAxios.post("charges", model);

  request
    .then((data) => {
      dispatch(saveChargeSuccess(data));
    })
    .catch((error) => {
      dispatch(saveChargeFailure(error));
    });
};
function saveChargeSuccess(data) {
  return {
    type: SAVE_CHARGE_SUCCESS,
    data: data,
  };
}
function saveChargeFailure(error) {
  return {
    type: SAVE_CHARGE_FAILURE,
    error: error,
  };
}
