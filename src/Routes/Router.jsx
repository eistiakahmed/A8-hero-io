import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";
import ErrorPage from "../Pages/Error/ErrorPage";
import AppsDetails from "../Pages/AppsDetails/AppsDetails";

const router = createBrowserRouter([ 
  {
    path:"/",
    Component: MainLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path:"/apps",
        Component: Apps

      },
      {
        path: "/installation",
        Component: Installation
      },
      {
        path: "/apps/:id",
        Component: AppsDetails
      }
    ]
  }
])



export default router;