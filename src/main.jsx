import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import About from './pages/About'

import {RouterProvider ,createBrowserRouter} from 'react-router-dom'


const routerProvider = createBrowserRouter([
  {
    path: "/about",
    element:  <About />
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={routerProvider}/>
  </React.StrictMode>,
)
