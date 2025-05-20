import { createBrowserRouter, RouterProvider } from "react-router";
// import Home from "./Pages/Home";
import Web3 from "./Pages/Web3/Web3.tsx";
import Layout from "./Layout/Layout";
import Login from "./Components/Auth/Login";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "/web3",
          element: <Web3 />,
        },
      ],
    },
    // {
    //   path: "/login",
    //   element: <Login />,
    // },
    // {
    //   path: "/register",
    //   element: <Register />,
    // },
    // {
    //   path: "/forgot-password",
    //   element: <ForgotPassword />,
    // },
    // {
    //   path: "/otp-verify",
    //   element: <VerifyOtp />,
    // },
    // {
    //   path: "/reset-password",
    //   element: <ResetPassword />,
    // },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App