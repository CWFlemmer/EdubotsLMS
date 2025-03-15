import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './styles/styles.scss'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'


import {
  Router,
  RouterProvider,
  createBrowserRouter,
  Outlet,
} from "react-router-dom"

const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Login />
        },
        {
          path: "/dashboard",
          element: <Dashboard />
        }
      ]
    }
  ]
)


function App() {
  return (
    <div className='app'>
      <div className='cont_app'>
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App
