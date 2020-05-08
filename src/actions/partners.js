import { commonAxios } from "../utils/apiUtils";
import {
  FIND_PARTNERS_FAILURE,
  FIND_PARTNERS_REQUEST,
  FIND_PARTNERS_SUCCESS,
  FIND_PARTNER_FAILURE,
  FIND_PARTNER_REQUEST,
  FIND_PARTNER_SUCCESS,
  DELETE_PARTNER_FAILURE,
  DELETE_PARTNER_REQUEST,
  DELETE_PARTNER_SUCCESS,
  SAVE_PARTNER_FAILURE,
  SAVE_PARTNER_REQUEST,
  SAVE_PARTNER_SUCCESS,
} from "../constants/partners";

function sleep(delay, value) {
  return new Promise(function (resolve) {
    setTimeout(resolve, delay, value);
  });
}

export const findAll = ({
  search = {},
  sort = "asc",
  page = 0,
  size = 5,
} = {}) => (dispatch) => {
  dispatch({ type: FIND_PARTNERS_REQUEST });

  commonAxios
    .get("partners", { params: { ...search, sort, page, size } })
    .then((data) => sleep(1000, data))
    .then((data) => {
      dispatch(findPartnersSuccess(data));
    })
    .catch((error) => {
      dispatch(findPartnersFailure(error));
    });
};
function findPartnersSuccess(data) {
  return {
    type: FIND_PARTNERS_SUCCESS,
    data: data,
  };
}
function findPartnersFailure(error) {
  return {
    type: FIND_PARTNERS_FAILURE,
    error: error,
  };
}

export const findById = (id) => (dispatch) => {
  dispatch({ type: FIND_PARTNER_REQUEST });

  commonAxios
    .get(`partners/${id}`)
    .then((data) => sleep(1000, data))
    .then((data) => {
      dispatch(findPartnerSuccess(data));
    })
    .catch((error) => {
      dispatch(findPartnerFailure(error));
    });
};
function findPartnerSuccess(data) {
  console.log("action partnert", data);

  return {
    type: FIND_PARTNER_SUCCESS,
    data: data,
  };
}
function findPartnerFailure(error) {
  return {
    type: FIND_PARTNER_FAILURE,
    error: error,
  };
}

export const deleteById = (id) => (dispatch) => {
  dispatch({ type: DELETE_PARTNER_REQUEST });

  commonAxios
    .delete(`partners/${id}`)
    .then((data) => sleep(1000, data))
    .then((data) => {
      dispatch(deletePartnerSuccess(data));
    })
    .catch((error) => {
      dispatch(deletePartnerFailure(error));
    });
};
function deletePartnerSuccess(data) {
  return {
    type: DELETE_PARTNER_SUCCESS,
    data: data,
  };
}
function deletePartnerFailure(error) {
  return {
    type: DELETE_PARTNER_FAILURE,
    error: error,
  };
}

export const save = (model) => (dispatch) => {
  dispatch({ type: SAVE_PARTNER_REQUEST });

  const request = model.id
    ? commonAxios.put(`partners/${model.id}`, model)
    : commonAxios.post("partners", model);

  request
    .then((data) => sleep(1000, data))
    .then((data) => {
      dispatch(savePartnerSuccess(data));
    })
    .catch((error) => {
      dispatch(savePartnerFailure(error));
    });
};
function savePartnerSuccess(data) {
  return {
    type: SAVE_PARTNER_SUCCESS,
    data: data,
  };
}
function savePartnerFailure(error) {
  return {
    type: SAVE_PARTNER_FAILURE,
    error: error,
  };
}
