import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import programadores from './datos/programadores.js'

//importamos router

import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'

/// importamos LenguajeVistas
import ProgramVistas from './vistas/Programadores.jsx'


const router = [
  {
    path:"/",
    element:<App/>,
  
  },
  
];
programadores.forEach((len) => {
  router.push({
    path: len.nombre,
    element:<ProgramVistas len={len} />,
  });
});

const routes = createBrowserRouter(router)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
