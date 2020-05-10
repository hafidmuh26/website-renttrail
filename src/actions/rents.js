import { commonAxios } from "../utils/apiUtils";
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

export const deleteById = (id) => (dispatch) => {
  dispatch({ type: DELETE_RENT_REQUEST });

  commonAxios
    .delete(`rents/${id}`)
    .then((data) => {
      dispatch(deleteRentSuccess(data));
    })
    .catch((error) => {
      dispatch(deleteRentFailure(error));
    });
};
function deleteRentSuccess(data) {
  return {
    type: DELETE_RENT_SUCCESS,
    data: data,
  };
}
function deleteRentFailure(error) {
  return {
    type: DELETE_RENT_FAILURE,
    error: error,
  };
}

export const findById = (id) => (dispatch) => {
  dispatch({ type: FIND_RENT_REQUEST });

  commonAxios
    .get(`rents/${id}`)
    .then((data) => {
      dispatch(findRentSuccess(data));
    })
    .catch((error) => {
      dispatch(findRentFailure(error));
    });
};
function findRentSuccess(data) {
  return {
    type: FIND_RENT_SUCCESS,
    data: data,
  };
}
function findRentFailure(error) {
  return {
    type: FIND_RENT_FAILURE,
    error: error,
  };
}

export const findAll = ({
  search = {},
  sort = "asc",
  page = 0,
  size = 5,
} = {}) => (dispatch) => {
  dispatch({ type: FIND_RENTS_REQUEST });

  commonAxios
    .get("rents", { params: { ...search, sort, page, size } })
    .then((data) => {
      dispatch(findRentsSuccess(data));
    })
    .catch((error) => {
      dispatch(findRentsFailure(error));
    });
};
function findRentsSuccess(data) {
  return {
    type: FIND_RENTS_SUCCESS,
    data: data,
  };
}
function findRentsFailure(error) {
  return {
    type: FIND_RENTS_FAILURE,
    error: error,
  };
}

export const save = (model) => (dispatch) => {
  dispatch({ type: SAVE_RENT_REQUEST });

  const request = model.id
    ? commonAxios.put(`rents/${model.id}`, model)
    : commonAxios.post("rents", model);

  request
    .then((data) => {
      dispatch(saveRentSuccess(data));
    })
    .catch((error) => {
      dispatch(saveRentFailure(error));
    });
};
function saveRentSuccess(data) {
  return {
    type: SAVE_RENT_SUCCESS,
    data: data,
  };
}
function saveRentFailure(error) {
  return {
    type: SAVE_RENT_FAILURE,
    error: error,
  };
}
