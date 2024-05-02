import React from "react";
import { Navigate, Route, RouteProps } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import AddTest from "../pages/apps/Test/AddTest";
import AddCulture from "../pages/apps/Culture/AddCulture";
import AddCultureOption from "../pages/apps/CultureOption/AddCultureOption";
import AddInvoice from "../pages/apps/Invoice/List/AddInvoice";
import AddBranch from "../pages/apps/branches/addBranch";
import AddAntibiotics from "../pages/apps/antibiotics/addAntibiotics";
import TestPrice from "../pages/apps/price-list/Test";
import CulturePrice from "../pages/apps/price-list/Culture";

const Login = React.lazy(() => import("../pages/auth/Login"));
const Logout = React.lazy(() => import("../pages/auth/Logout"));
const Confirm = React.lazy(() => import("../pages/auth/Confirm"));
const ForgetPassword = React.lazy(() => import("../pages/auth/ForgetPassword"));
const Register = React.lazy(() => import("../pages/auth/Register"));
const LockScreen = React.lazy(() => import("../pages/auth/LockScreen"));

const EcommerceDashboard = React.lazy(
  () => import("../pages/dashboard/Ecommerce/")
);

const ProfileApp = React.lazy(() => import("../pages/apps/Profile"));

const TestApp = React.lazy(() => import("../pages/apps/Test"));
const Culture = React.lazy(() => import("../pages/apps/Culture/Inbox"));
const CultureOptions = React.lazy(() => import("../pages/apps/CultureOption"));
const Invoice = React.lazy(() => import("../pages/apps/Invoice/List"));
const Antibiotics = React.lazy(() => import("../pages/apps/antibiotics"));

const Error404 = React.lazy(() => import("../pages/error/Error404"));
const Error500 = React.lazy(() => import("../pages/error/Error500"));

const Branches = React.lazy(() => import("../pages/apps/branches"));

export interface RoutesProps {
  path: RouteProps["path"];
  name?: string;
  element?: RouteProps["element"];
  route?: any;
  exact?: boolean;
  icon?: string;
  header?: string;
  roles?: string[];
  children?: RoutesProps[];
}

// dashboards
const dashboardRoutes: RoutesProps = {
  path: "/dashboard",
  name: "Dashboards",
  icon: "airplay",
  header: "Navigation",
  children: [
    {
      path: "/",
      name: "Root",
      element: <Navigate to="/dashboard/ecommerce" />,
      route: PrivateRoute,
    },
    {
      path: "/dashboard/ecommerce",
      name: "Ecommerce",
      element: <EcommerceDashboard />,
      route: PrivateRoute,
    },
  ],
};

const profileAppRoutes: RoutesProps = {
  path: "/dashboard/edit-profile",
  name: "Profile",
  route: PrivateRoute,
  roles: ["Admin"],
  icon: "user",
  element: <ProfileApp />,
  header: "Apps",
};

const chatAppRoutes: RoutesProps = {
  path: "/apps/test",
  name: "Test",
  route: PrivateRoute,
  roles: ["Admin"],
  icon: "thermometer",
  element: <TestApp />,
};

const AddTestAppRoutes: RoutesProps = {
  path: "/apps/test/add",
  name: "Chat",
  route: PrivateRoute,
  roles: ["Admin"],
  icon: "message-square",
  element: <AddTest />,
};
const emailAppRoutes: RoutesProps = {
  path: "apps/culture",
  name: "Culture",
  route: PrivateRoute,
  roles: ["Admin"],
  icon: "wind",
  element: <Culture />,
};
const assLabAppRoutes: RoutesProps = {
  path: "apps/culture/add",
  name: "Culture",
  route: PrivateRoute,
  roles: ["Admin"],
  icon: "wind",
  element: <AddCulture />,
};

const cultureOptionAppRoutes: RoutesProps = {
  path: "/apps/culture-option",
  name: "Culture Options",
  route: PrivateRoute,
  roles: ["Admin"],
  icon: "wind",
  element: <CultureOptions />,
};

const addCultureOptionAppRoutes: RoutesProps = {
  path: "/apps/culture-option/add",
  name: "Culture Options",
  route: PrivateRoute,
  roles: ["Admin"],
  icon: "uil-briefcase",
  element: <AddCultureOption />,
};

const invoiceAppRoutes: RoutesProps = {
  path: "/apps/invoice",
  name: "Invoice",
  route: PrivateRoute,
  roles: ["Admin"],
  icon: "file-text",
  element: <Invoice />,
};

const addInvoiceAppRoutes: RoutesProps = {
  path: "/apps/invoice/add",
  name: "Invoice",
  route: PrivateRoute,
  roles: ["Admin"],
  icon: "file-text",
  element: <AddInvoice />,
};

const branchesRoutes: RoutesProps = {
  path: "/apps/branches",
  name: "Components",
  icon: "git-branch",
  route: PrivateRoute,
  roles: ["Admin"],
  element: <Branches />,
};
const addBranchesRoutes: RoutesProps = {
  path: "/apps/branches/add",
  name: "Components",
  icon: "git-branch",
  route: PrivateRoute,
  roles: ["Admin"],
  element: <AddBranch />,
};

const AntibioticsRoutes: RoutesProps = {
  path: "/apps/antibiotics",
  name: "Components",
  icon: "award",
  route: PrivateRoute,
  roles: ["Admin"],
  element: <Antibiotics />,
};

const addAntibioticsRoutes: RoutesProps = {
  path: "/apps/antibiotics/add",
  name: "Components",
  icon: "award",
  route: PrivateRoute,
  roles: ["Admin"],
  element: <AddAntibiotics />,
};

const priceListRoutes: RoutesProps = {
  path: "/dashboard",
  name: "Price List",
  icon: "bar-chart-2",
  children: [
    {
      path: "/price-list/test",
      name: "Test",
      element: <TestPrice />,
      route: PrivateRoute,
    },
    {
      path: "/price-list/culture",
      name: "Culture",
      element: <CulturePrice />,
      route: PrivateRoute,
    },
  ],
};

// const widgetsRoutes: RoutesProps = {
//   path: "/components/widgets",
//   name: "Components",
//   icon: "package",
//   header: "UI Elements",
//   element: <Widgets />,
// };

const appRoutes = [
  profileAppRoutes,
  chatAppRoutes,
  AddTestAppRoutes,
  emailAppRoutes,
  assLabAppRoutes,
  cultureOptionAppRoutes,
  addCultureOptionAppRoutes,
  invoiceAppRoutes,
  addInvoiceAppRoutes,
  branchesRoutes,
  addBranchesRoutes,
  // widgetsRoutes,
  AntibioticsRoutes,
  addAntibioticsRoutes,
  priceListRoutes,
];

// pages
const extrapagesRoutes: RoutesProps = {
  path: "/pages",
  name: "Pages",
  icon: "package",
  header: "Custom",
  children: [],
};

// ui

// auth
const authRoutes: RoutesProps[] = [
  {
    path: "/auth/login",
    name: "Login",
    element: <Login />,
    route: Route,
  },
  {
    path: "/auth/register",
    name: "Register",
    element: <Register />,
    route: Route,
  },
  {
    path: "/auth/confirm",
    name: "Confirm",
    element: <Confirm />,
    route: Route,
  },
  {
    path: "/auth/forget-password",
    name: "Forget Password",
    element: <ForgetPassword />,
    route: Route,
  },
  {
    path: "/auth/lock-screen",
    name: "Lock Screen",
    element: <LockScreen />,
    route: Route,
  },
  {
    path: "/auth/logout",
    name: "Logout",
    element: <Logout />,
    route: Route,
  },
];

const otherPublicRoutes: RoutesProps[] = [
  {
    path: "/error-404",
    name: "Error - 404",
    element: <Error404 />,
    route: Route,
  },
  {
    path: "/error-500",
    name: "Error - 500",
    element: <Error500 />,
    route: Route,
  },
];

const flattenRoutes = (routes: RoutesProps[]) => {
  let flatRoutes: RoutesProps[] = [];

  routes = routes || [];
  routes.forEach((item: RoutesProps) => {
    flatRoutes.push(item);

    if (typeof item.children !== "undefined") {
      flatRoutes = [...flatRoutes, ...flattenRoutes(item.children)];
    }
  });
  return flatRoutes;
};

// All routes
const authProtectedRoutes = [dashboardRoutes, ...appRoutes, extrapagesRoutes];
const publicRoutes = [...authRoutes, ...otherPublicRoutes];

const authProtectedFlattenRoutes = flattenRoutes([...authProtectedRoutes]);
const publicProtectedFlattenRoutes = flattenRoutes([...publicRoutes]);
export {
  publicRoutes,
  authProtectedRoutes,
  authProtectedFlattenRoutes,
  publicProtectedFlattenRoutes,
};
