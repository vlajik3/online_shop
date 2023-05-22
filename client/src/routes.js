import Admin from "./pages/Admin";
import {
  ADMIN_ROUTE,
  BASE_ROUTE,
  BASKET_ROUTE,
  DEVICE_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from "./utils/constants";
import Basket from "./pages/Basket";
import Auth from "./pages/Auth";
import Device from "./pages/Device";
import Shop from "./pages/Shop";

export const authRoutes = [
  {
    path: BASE_ROUTE,
    Component: Shop,
  },
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
  {
    path: BASKET_ROUTE,
    Component: Basket,
  },

  {
    path: DEVICE_ROUTE,
    Component: Device,
  },
  {
    path: SHOP_ROUTE,
    Component: Shop,
  },
];

export const publicRoutes = [
  {
    path: BASE_ROUTE,
    Component: Shop,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: DEVICE_ROUTE,
    Component: Device,
  },
  {
    path: SHOP_ROUTE,
    Component: Shop,
  },
];
