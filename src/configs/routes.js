import Login from "../pages/start/login";
import Register from "../pages/start/register";
import ForgotPassword from "../pages/start/forgotPassword";
import Dashboard from "../pages/dashboard";
import ErrorPage from "../pages/errorPage";
import NewPassword from "../pages/start/newPassword";
import Partners from "../pages/partner/partner/partners";
import Items from "../pages/partner/items/items";
import ItemsPending from "../pages/partner/itemsPending/itemsPending";
import Users from "../pages/user/user/users";
import ReportsUsr from "../pages/user/report/reports";
import ReportsSpecificUsr from "../pages/user/report/reportsSpecific";
import ReportsDetilUsr from "../pages/user/report/reportDetil";
import UsersDetil from "../pages/user/user/userDetil";
import ReportsPrtn from "../pages/partner/report/reports";
import ReportsSpecificPrtn from "../pages/partner/report/reportsSpecific";
import ReportsDetilPrtn from "../pages/partner/report/reportDetil";
import PartnerDetil from "../pages/partner/partner/partnerDetil";
import ItemsDetil from "../pages/partner/items/itemsDetil";
import ItemsSpecific from "../pages/partner/items/itemsSpecific";
import ItemsPendingDetil from "../pages/partner/itemsPending/itemsPendingDetil";
import ItemsPendingSpecific from "../pages/partner/itemsPending/itemsPendingSpecific/ItemsPendingSpecific";

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
    path: "/register",
    component: Register,
  },
  {
    path: "/forgotPassword",
    component: ForgotPassword,
  },
  {
    path: "/newPassword",
    component: NewPassword,
  },

  {
    path: "/home",
    component: Dashboard,
  },

  {
    path: "/partners",
    component: Partners,
  },
  {
    path: "/partners/items",
    component: Items,
  },
  {
    path: "/partners/items/specific/:id",
    component: ItemsSpecific,
  },
  {
    path: "/partners/items/:id",
    component: ItemsDetil,
  },
  {
    path: "/partners/items-pending",
    component: ItemsPending,
  },
  {
    path: "/partners/items-pending/specific/:id",
    component: ItemsPendingSpecific,
  },
  {
    path: "/partners/items-pending/:id",
    component: ItemsPendingDetil,
  },
  {
    path: "/partners/reports",
    component: ReportsPrtn,
  },
  {
    path: "/partners/reports/specific/:id",
    component: ReportsSpecificPrtn,
  },
  {
    path: "/partners/reports/:id",
    component: ReportsDetilPrtn,
  },
  {
    path: "/partners/:id",
    component: PartnerDetil,
  },

  {
    path: "/users",
    component: Users,
  },
  {
    path: "/users/reports",
    component: ReportsUsr,
  },
  {
    path: "/users/reports/specific/:id",
    component: ReportsSpecificUsr,
  },
  {
    path: "/users/reports/:id",
    component: ReportsDetilUsr,
  },
  {
    path: "/users/:id",
    component: UsersDetil,
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
