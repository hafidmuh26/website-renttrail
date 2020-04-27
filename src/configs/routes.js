import Login from "../pages/login";
import Signup from "../pages/signup";
import ForgotPassword from "../pages/forgotPassword";
import Dashboard from "../pages/dashboard";
import ErrorPage from "../pages/errorPage";

const routes = [
  {
    path: "/",
    component: Login,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/sigup",
    component: Signup,
  },
  {
    path: "/forgotPassword",
    component: ForgotPassword,
  },
  {
    path: "/home",
    component: Dashboard,
  },
  {
    path: "*",
    component: ErrorPage,
    props: {
      code: 404,
    },
  },
];

export default routes;
