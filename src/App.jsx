import React from "react";
import { createBrowserRouter, Route, Routes, Navigate, RouterProvider } from "react-router-dom";

import { Home, NotFound, Projects, Resume } from "./pages";

const router = createBrowserRouter([
  {
    path: "/portfolio",
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "resume",
        element: <Resume />,
      },
    ],
  },
  {
    path: "/projects",
    element: <Navigate to="/portfolio/projects" />,
  },
  {
    path: "/*",
    element: <NotFound />,
  }
])


const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;