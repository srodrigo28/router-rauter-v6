import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Home } from './pages/Home'
import { Register } from './pages/Register'
import { Contato } from './pages/Contato'

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/cadastro", element: <Register /> },
  { path: "/contato", element: <Contato /> },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>,
)
