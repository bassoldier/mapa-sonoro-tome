import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import routes from './routes';
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={createBrowserRouter(routes)} />
  </React.StrictMode>,
)
