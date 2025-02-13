import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import NotFound from "../pages/NotFound/NotFound";
import Orders from "../pages/Orders/Orders";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/",
      element: (
        <MainLayout>
          <Dashboard />
        </MainLayout>
      ),
      errorElement: <NotFound />,
    },
    {
      path: "/orders",
      element: (
        <MainLayout>
          <Orders />
        </MainLayout>
      ),
      errorElement: <NotFound />,
    },
  ]);

  export default router;
