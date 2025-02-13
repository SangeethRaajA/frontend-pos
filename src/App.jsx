import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ConfigProvider, theme } from "antd"
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Dashboard from "./pages/Dashboard/Dashboard";
import MainLayout from "./layout/MainLayout";
import NotFound from "./pages/NotFound/NotFound";
import Orders from "./pages/Orders/Orders";

const App = () => {
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

  return (
    <>
      <ConfigProvider
                theme={{
                    token: {
                        borderRadius: 8,
                        fontSize: 16,
                    },
                }}
            >
        <RouterProvider router={router} />
      </ConfigProvider>
    </>
  );
};

export default App;
