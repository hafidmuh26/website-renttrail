import Charges from "../pages/charges";
import ErrorPage from "../pages/errorPage";
import Items from "../pages/items/items";
import ItemsDetil from "../pages/items/itemsDetil";
import PartnerDetil from "../pages/partner/partnerDetil";
import Partners from "../pages/partner/partners";
import PendingItems from "../pages/pendingItems/pendingItems";
import PendingItemsDetil from "../pages/pendingItems/pendingItemsDetil";
import RentDetil from "../pages/rent/rentDetil";
import Rents from "../pages/rent/rents";
import ForgotPassword from "../pages/start/forgotPassword";
import Login from "../pages/start/login";
import NewPassword from "../pages/start/newPassword";
import Register from "../pages/start/register";
import Transaction from "../pages/transaction/transactions";
import UsersDetil from "../pages/user/userDetil";
import Users from "../pages/user/users";

const routes = [
  {
    path: "/",
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
    path: "/transaction",
    component: Transaction,
  },

  {
    path: "/partners",
    component: Partners,
  },
  {
    path: "/partners/:id",
    component: PartnerDetil,
  },
  {
    path: "/pendings",
    component: PendingItems,
  },
  {
    path: "/pendings/:id",
    component: PendingItemsDetil,
  },
  {
    path: "/items",
    component: Items,
  },
  {
    path: "/items/:id",
    component: ItemsDetil,
  },
  {
    path: "/rents",
    component: Rents,
  },
  {
    path: "/rents/:id",
    component: RentDetil,
  },
  {
    path: "/charges",
    component: Charges,
  },

  {
    path: "/users",
    component: Users,
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
