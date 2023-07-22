import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import DesktopNavbar from "./components/Navbar/DesktopNavbar";
import MobileNavbar from "./components/Navbar/MobileNavbar";
import useMediaQuery from "@mui/material/useMediaQuery";

// Pages
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
// import Cart from "./pages/Cart/Cart";
// import Checkout from "./pages/Checkout/Checkout";
// import UserDashboard from "./pages/UserDashboard/UserDashboard";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

const Layout = () => {
  const isMobile = useMediaQuery("(max-width: 768px)"); // Adjust the breakpoint as needed
  return (
    <div>
      {isMobile ? <MobileNavbar /> : <DesktopNavbar />}
      {/* <Navbar /> */}
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <Products /> },
      { path: "/products/single-product/:id", element: <SingleProduct /> },
      { path: "/*", element: <PageNotFound /> },
    ],
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

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
