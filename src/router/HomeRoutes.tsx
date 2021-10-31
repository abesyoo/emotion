import { Home } from "../pages/Home";
import { Setting } from "../pages/Setting";
import { UserManagement } from "../pages/UserManagement";

export const homeRoutes = [
  {
    path: "/",
    exact: true,
    children: <Home />
  },
  {
    path: "/user_management",
    exact: false,
    children: <UserManagement />
  },
  {
    path: "/setting",
    exact: false,
    children: <Setting />
  }
];
