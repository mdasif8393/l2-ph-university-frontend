import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { adminRoutes } from "./admin.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <App />,
    children: adminRoutes,
    // adminRoutes = [
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
    children: adminRoutes,
  },
  {
    path: "/student",
    element: <App />,
    children: adminRoutes,
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
