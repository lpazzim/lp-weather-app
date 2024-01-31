import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { AddForecastPage } from "./pages/AddForecast";
import { Forecasts } from "./pages/Forecasts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AddForecastPage />,
  },
  {
    path: "/forecasts",
    element: <Forecasts />,
  },
  {
    path: "/add-forecast",
    element: <AddForecastPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
