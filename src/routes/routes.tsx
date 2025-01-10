import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { routeGenerator } from "../utils/routesGenerator";
import { adminPaths } from "./admin.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <App />,
    children: routeGenerator(adminPaths),
    // [
    //   {
    //     path: "dashboard",
    //     element: <AdminDashboard />,
    //   },
    //   {
    //     path: "create-student",
    //     element: <CreateStudent />,
    //   },
    //   {
    //     path: "create-admin",
    //     element: <CreateAdmin />,
    //   },
    //   {
    //     path: "create-faculty",
    //     element: <CreateFaculty />,
    //   },
    // ];
  },
  {
    path: "/faculty",
    element: <App />,
    children: routeGenerator(adminPaths),
  },
  {
    path: "/student",
    element: <App />,
    children: routeGenerator(adminPaths),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
