// import { commonAxios } from "../utils/apiUtils";
// import {
//   LOGIN_FAILURE,
//   LOGIN_REQUEST,
//   LOGIN_SUCCESS,
// } from "../constants/login";

// function loginSucces(data) {
//   return {
//     type: LOGIN_SUCCESS,
//     data: data,
//   };
// }
// function loginFailure(error) {
//   return {
//     type: LOGIN_FAILURE,
//     error: error,
//   };
// }
// export const loginData = ({ email, password } = {}) => (dispatch) => {
//   dispatch({
//     type: { LOGIN_REQUEST },
//   });

//   const request = commonAxios.post("auth/login", { email, password });
//   request
//     .then((data) => {
//       dispatch(loginSucces(data));
//     })
//     .catch((error) => {
//       dispatch(loginFailure(error));
//     });
// };
