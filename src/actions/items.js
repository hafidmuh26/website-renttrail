import { commonAxios } from "../utils/apiUtils";
import {
  DELETE_ITEM_FAILURE,
  DELETE_ITEM_REQUEST,
  DELETE_ITEM_SUCCESS,
  FIND_ITEMS_FAILURE,
  FIND_ITEMS_REQUEST,
  FIND_ITEMS_SUCCESS,
  FIND_ITEM_FAILURE,
  FIND_ITEM_REQUEST,
  FIND_ITEM_SUCCESS,
  SAVE_ITEM_FAILURE,
  SAVE_ITEM_REQUEST,
  SAVE_ITEM_SUCCESS,
} from "../constants/items";

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
  dispatch({ type: FIND_ITEMS_REQUEST });

  commonAxios
    .get("items", { params: { ...search, sort, page, size } })
    .then((data) => sleep(1000, data))
    .then((data) => {
      dispatch(findItemsSuccess(data));
    })
    .catch((error) => {
      dispatch(findItemsFailure(error));
    });
};
function findItemsSuccess(data) {
  return {
    type: FIND_ITEMS_SUCCESS,
    data: data,
  };
}
function findItemsFailure(error) {
  return {
    type: FIND_ITEMS_FAILURE,
    error: error,
  };
}

export const findById = (id) => (dispatch) => {
  dispatch({ type: FIND_ITEM_REQUEST });

  commonAxios
    .get(`items/${id}`)
    .then((data) => sleep(1000, data))
    .then((data) => {
      dispatch(findItemSuccess(data));
    })
    .catch((error) => {
      dispatch(findItemFailure(error));
    });
};
function findItemSuccess(data) {
  return {
    type: FIND_ITEM_SUCCESS,
    data: data,
  };
}
function findItemFailure(error) {
  return {
    type: FIND_ITEM_FAILURE,
    error: error,
  };
}

export const deleteById = (id) => (dispatch) => {
  dispatch({ type: DELETE_ITEM_REQUEST });

  commonAxios
    .delete(`items/${id}`)
    .then((data) => sleep(1000, data))
    .then((data) => {
      dispatch(deleteItemSuccess(data));
    })
    .catch((error) => {
      dispatch(deleteItemFailure(error));
    });
};
function deleteItemSuccess(data) {
  return {
    type: DELETE_ITEM_SUCCESS,
    data: data,
  };
}
function deleteItemFailure(error) {
  return {
    type: DELETE_ITEM_FAILURE,
    error: error,
  };
}

export const save = (model) => (dispatch) => {
  dispatch({ type: SAVE_ITEM_REQUEST });

  const request = model.id
    ? commonAxios.put(`items/${model.id}`, model)
    : commonAxios.post("items", model);

  request
    .then((data) => sleep(1000, data))
    .then((data) => {
      dispatch(saveItemSuccess(data));
    })
    .catch((error) => {
      dispatch(saveItemFailure(error));
    });
};
function saveItemSuccess(data) {
  return {
    type: SAVE_ITEM_SUCCESS,
    data: data,
  };
}
function saveItemFailure(error) {
  return {
    type: SAVE_ITEM_FAILURE,
    error: error,
  };
}
