import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import App from "./App";
import Home from "./pages/Home";
import GameList from "./pages/GameList";
import Game from "./pages/Game";
import PeriphList from "./pages/PeriphList";
import Periph from "./pages/Periph";
import Privacy from "./pages/Privacy";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/gameList",
        element: <GameList />,
      },
      {
        path: "/gameList/:id",
        element: <Game />,
      },
      {
        path: "/periphList",
        element: <PeriphList />,
      },
      {
        path: "/periphList/:id",
        element: <Periph />,
      },
      { 
        path: "/privacy",
        element: <Privacy />
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
