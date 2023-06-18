import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createBrowserRouter, Route, Routes, Navigate, RouterProvider } from "react-router-dom";

import {
  Navbar, Hero, About, Experience, Tech, Works, Feedbacks, Contact, StarsCanvas, Footer, Education
} from "./components";
import { NotFound } from "./pages";
import { Resume } from "./pages";

const router = createBrowserRouter([
  {
    path: "/3d-portfolio",
    element:
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Education />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
  },
  {
    path: "/resume",
    element: <Resume />,
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