import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Nosotros from './pages/Nosotros';
import Index from './pages/Index';
import Menu from './pages/Menu';
import ReservationPage from './pages/ReservationPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index/>
      }
    ]
  },
  {
    path: '/nosotros',
    element: <Nosotros/>
  },
  {
    path: '/menu',
    element: <Menu/>
  },
  {
    path: '/reservacion',
    element: <ReservationPage/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
