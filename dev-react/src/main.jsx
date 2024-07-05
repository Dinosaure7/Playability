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
import ContactPage from "./pages/ContactPage";

import { fetchApi, fetchApi2 } from "./service/api.service";
import ErrorPage from "./pages/ErrorPage";
import Scan from "./pages/Scan";

const id = 1091;
const ids = [33, 161, 168, 290, 871, 1091];
const gameInfosUrls = ids.map((id) => `/game/${id}`);

const homeUrl = `/`;
const gamesNameUrl = `/game`;
const gameInfosUrl = `/game/${id}`;
const gameSummaryUrl = `/summary/${id}`;
const gameRatingUrl = `/rating/${id}`;
const gameGenresUrl = `/genres/${id}`;
const gamePlatformsUrl = `/platforms/${id}`;
const gameCompaniesUrl = `/companies/${id}`;
const gameCoverUrl = `/cover/${id}`;
const gameVideoUrl = `/video/${id}`;
const gameRecoUrl = `/recommandation/${id}`;

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetchApi2(gameInfosUrls),
      },
      {
        path: "/gameList",
        element: <GameList />,
        loader: () => fetchApi(""),
      },
      {
        path: "/gameList/:id",
        element: <Game />,
        loader: async ({ params }) => {
          // Effectuer les deux appels API simultanément
          const [gameData, gameRecommendations] = await Promise.all([
            fetchApi(`${gamesNameUrl}/${params.id}`),
            fetchApi(`${gameRecoUrl}`),
          ]);

          // Retourner les données combinées
          return { gameData, gameRecommendations };
        },
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
        element: <Privacy />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/scan",
        element: <Scan />,
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
