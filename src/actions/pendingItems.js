import { commonAxios } from "../utils/apiUtils";
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

export const deleteById = (id) => (dispatch) => {
  dispatch({ type: DELETE_PENDINGITEM_REQUEST });

  commonAxios
    .delete(`pendings/${id}`)
    .then((data) => {
      dispatch(deleteItemPendingSuccess(data));
    })
    .catch((error) => {
      dispatch(deleteItemPendingFailure(error));
    });
};
function deleteItemPendingSuccess(data) {
  return {
    type: DELETE_PENDINGITEM_SUCCESS,
    data: data,
  };
}
function deleteItemPendingFailure(error) {
  return {
    type: DELETE_PENDINGITEM_FAILURE,
    error: error,
  };
}

export const findById = (id) => (dispatch) => {
  dispatch({ type: FIND_PENDINGITEM_REQUEST });

  commonAxios
    .get(`pendings/${id}`)
    .then((data) => {
      dispatch(findItemPendingSuccess(data));
    })
    .catch((error) => {
      dispatch(findItemPendingFailure(error));
    });
};
function findItemPendingSuccess(data) {
  return {
    type: FIND_PENDINGITEM_SUCCESS,
    data: data,
  };
}
function findItemPendingFailure(error) {
  return {
    type: FIND_PENDINGITEM_FAILURE,
    error: error,
  };
}

export const findAll = ({
  search = {},
  sort = "asc",
  page = 0,
  size = 5,
} = {}) => (dispatch) => {
  dispatch({ type: FIND_PENDINGITEMS_REQUEST });

  commonAxios
    .get("pendings", { params: { ...search, sort, page, size } })
    .then((data) => {
      dispatch(findItemsPendingSuccess(data));
    })
    .catch((error) => {
      dispatch(findItemsPendingFailure(error));
    });
};
function findItemsPendingSuccess(data) {
  return {
    type: FIND_PENDINGITEMS_SUCCESS,
    data: data,
  };
}
function findItemsPendingFailure(error) {
  return {
    type: FIND_PENDINGITEMS_FAILURE,
    error: error,
  };
}

export const save = (model) => (dispatch) => {
  dispatch({ type: SAVE_PENDINGITEM_REQUEST });

  const request = model.id
    ? commonAxios.put(`pendings/${model.id}`, model)
    : commonAxios.post("pendings", model);

  request
    .then((data) => {
      dispatch(saveItemPendingSuccess(data));
    })
    .catch((error) => {
      dispatch(saveItemPendingFailure(error));
    });
};
function saveItemPendingSuccess(data) {
  return {
    type: SAVE_PENDINGITEM_SUCCESS,
    data: data,
  };
}
function saveItemPendingFailure(error) {
  return {
    type: SAVE_PENDINGITEM_FAILURE,
    error: error,
  };
}
