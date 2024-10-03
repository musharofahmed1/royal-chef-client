import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Component/Layouts/MainLayout";
import Home from "../Component/Pages/Home/Home/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
      ],
    },
  ]);