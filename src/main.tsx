import "./main.css";

import { createRoot } from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import { BookModal } from "./components/BookModal";
import { Header } from "./components/Header";
import { Bookings } from "./pages/Bookings";
import { Home } from "./pages/Home/index";

const Layout = () => {
  return (
    <>
      <Header />
      <BookModal />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "bookings",
        element: <Bookings />,
      },
    ],
  },
]);

const container = document.getElementById("root");
const root = createRoot(container as HTMLDivElement);

root.render(<RouterProvider router={router} />);
