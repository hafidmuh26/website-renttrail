// import {
//   LOGIN_FAILURE,
//   LOGIN_REQUEST,
//   LOGIN_SUCCESS,
// } from "../constants/login";

// const defaultState = {
//   data: { email: null, token: null },
//   loading: false,
//   error: null,
// };

// export function loginData(state = defaultState, action) {
//   switch (action.type) {
//     case LOGIN_REQUEST:
//       return {
//         ...state,
//         loading: true,
//         error: null,
//       };
//     case LOGIN_SUCCESS:
//       return {
//         data: action.data,
//         loading: false,
//         error: null,
//       };
//     case LOGIN_FAILURE:
//       console.log("reducer login fail", action.data);

//       return {
//         ...state,
//         loading: false,
//         error: action.error,
//       };
//     default:
//       return state;
//   }
// }
