import { commonAxios } from "../utils/apiUtils";
import {
  DELETE_TRANSACTION_FAILURE,
  DELETE_TRANSACTION_REQUEST,
  DELETE_TRANSACTION_SUCCESS,
  FIND_TRANSACTIONS_FAILURE,
  FIND_TRANSACTIONS_REQUEST,
  FIND_TRANSACTIONS_SUCCESS,
  FIND_TRANSACTION_FAILURE,
  FIND_TRANSACTION_REQUEST,
  FIND_TRANSACTION_SUCCESS,
  SAVE_TRANSACTION_FAILURE,
  SAVE_TRANSACTION_REQUEST,
  SAVE_TRANSACTION_SUCCESS,
} from "../constants/transactions";

function sleep(delay, value) {
  return new Promise(function (resolve) {
    setTimeout(resolve, delay, value);
  });
}

export const deleteById = (id) => (dispatch) => {
  dispatch({ type: DELETE_TRANSACTION_REQUEST });

  commonAxios
    .delete(`transaction/${id}`)
    .then((data) => sleep(1000, data))
    .then((data) => {
      dispatch(deleteTransactionSuccess(data));
    })
    .catch((error) => {
      dispatch(deleteTransactionFailure(error));
    });
};
function deleteTransactionSuccess(data) {
  return {
    type: DELETE_TRANSACTION_SUCCESS,
    data: data,
  };
}
function deleteTransactionFailure(error) {
  return {
    type: DELETE_TRANSACTION_FAILURE,
    error: error,
  };
}

export const findById = (id) => (dispatch) => {
  dispatch({ type: FIND_TRANSACTION_REQUEST });

  commonAxios
    .get(`transaction/${id}`)
    .then((data) => sleep(1000, data))
    .then((data) => {
      dispatch(findTransactionSuccess(data));
    })
    .catch((error) => {
      dispatch(findTransactionFailure(error));
    });
};
function findTransactionSuccess(data) {
  return {
    type: FIND_TRANSACTION_SUCCESS,
    data: data,
  };
}
function findTransactionFailure(error) {
  return {
    type: FIND_TRANSACTION_FAILURE,
    error: error,
  };
}

export const findAll = ({
  search = {},
  sort = "asc",
  page = 0,
  size = 5,
} = {}) => (dispatch) => {
  dispatch({ type: FIND_TRANSACTIONS_REQUEST });

  commonAxios
    .get("transaction", { params: { ...search, sort, page, size } })
    .then((data) => sleep(1000, data))
    .then((data) => {
      dispatch(findTransactionsSuccess(data));
    })
    .catch((error) => {
      dispatch(findTransactionsFailure(error));
    });
};
function findTransactionsSuccess(data) {
  return {
    type: FIND_TRANSACTIONS_SUCCESS,
    data: data,
  };
}
function findTransactionsFailure(error) {
  return {
    type: FIND_TRANSACTIONS_FAILURE,
    error: error,
  };
}

export const save = (model) => (dispatch) => {
  dispatch({ type: SAVE_TRANSACTION_REQUEST });

  const request = model.id
    ? commonAxios.put(`transaction/${model.id}`, model)
    : commonAxios.post("transaction", model);

  request
    .then((data) => sleep(1000, data))
    .then((data) => {
      dispatch(saveTransactionSuccess(data));
    })
    .catch((error) => {
      dispatch(saveTransactionFailure(error));
    });
};
function saveTransactionSuccess(data) {
  return {
    type: SAVE_TRANSACTION_SUCCESS,
    data: data,
  };
}
function saveTransactionFailure(error) {
  return {
    type: SAVE_TRANSACTION_FAILURE,
    error: error,
  };
}
