//import {Router, createBrowserRouter, createRoutesFromElements,RouterProvider} from 'react-router-dom'
/* 1.20 */

import { createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

import React from 'react'
import MainLayout from "./layouts/MainLayout";

import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import Addjob from "./pages/AddJob"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path ="/" element={<MainLayout/>} >
      <Route index element={<HomePage/>} ></Route>
      <Route path ='/jobs' element={<JobsPage/>} ></Route>
      <Route path ='/add-job' element={<Addjob/>} ></Route>
    </Route>
  )
);
 

const App = () => {
  return (
   <RouterProvider router = {router} />
  )
}

export default App