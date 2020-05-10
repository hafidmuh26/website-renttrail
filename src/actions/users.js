import { commonAxios } from "../utils/apiUtils";
import {
  FIND_USERS_FAILURE,
  FIND_USERS_REQUEST,
  FIND_USERS_SUCCESS,
  FIND_USER_FAILURE,
  FIND_USER_REQUEST,
  FIND_USER_SUCCESS,
  DELETE_USER_FAILURE,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  SAVE_USER_FAILURE,
  SAVE_USER_REQUEST,
  SAVE_USER_SUCCESS,
} from "../constants/users";

export const findAll = ({
  search = {},
  sort = "asc",
  page = 0,
  size = 10,
} = {}) => (dispatch) => {
  dispatch({ type: FIND_USERS_REQUEST });

  commonAxios
    .get("users", { params: { ...search, sort, page, size } })
    .then((data) => {
      dispatch(findUsersSuccess(data));
    })
    .catch((error) => {
      dispatch(findUsersFailure(error));
    });
};
function findUsersSuccess(data) {
  return {
    type: FIND_USERS_SUCCESS,
    data: data,
  };
}
function findUsersFailure(error) {
  return {
    type: FIND_USERS_FAILURE,
    error: error,
  };
}

export const findById = (id) => (dispatch) => {
  dispatch({ type: FIND_USER_REQUEST });

  commonAxios
    .get(`users/${id}`)
    .then((data) => {
      dispatch(findUserSuccess(data));
    })
    .catch((error) => {
      dispatch(findUserFailure(error));
    });
};
function findUserSuccess(data) {
  return {
    type: FIND_USER_SUCCESS,
    data: data,
  };
}
function findUserFailure(error) {
  return {
    type: FIND_USER_FAILURE,
    error: error,
  };
}

export const deleteById = (id) => (dispatch) => {
  dispatch({ type: DELETE_USER_REQUEST });

  commonAxios
    .delete(`users/${id}`)
    .then((data) => {
      dispatch(deleteUserSuccess(data));
    })
    .catch((error) => {
      dispatch(deleteUserFailure(error));
    });
};
function deleteUserSuccess(data) {
  return {
    type: DELETE_USER_SUCCESS,
    data: data,
  };
}
function deleteUserFailure(error) {
  return {
    type: DELETE_USER_FAILURE,
    error: error,
  };
}

export const save = (model) => (dispatch) => {
  dispatch({ type: SAVE_USER_REQUEST });

  const request = model.id
    ? commonAxios.put(`users/${model.id}`, model)
    : commonAxios.post("users", model);

  request
    .then((data) => {
      dispatch(saveUserSuccess(data));
    })
    .catch((error) => {
      dispatch(saveUserFailure(error));
    });
};
function saveUserSuccess(data) {
  return {
    type: SAVE_USER_SUCCESS,
    data: data,
  };
}
function saveUserFailure(error) {
  return {
    type: SAVE_USER_FAILURE,
    error: error,
  };
}
