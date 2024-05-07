
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';


import Home from './views/home';
import './index.css';
import Admin from './views/admin';
import { CreateProduct } from './views/createProduct';
import { Products } from './views/products';
import AlertProvider from './provider/alert';
import Cart from './views/cart';
import ClientForm from './views/clientForm';
import ConfirmOrder from './views/confirmOrder';
import { Clients } from './views/clients';





const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/client',
    element: <ClientForm />,
  },
  {
    path: '/confirmOrder/:id',
    element: <ConfirmOrder />,
  },

  {
    path: '/admin',
    element: <Admin />,
    children: [
      {
        path: '/admin/',
        element: <Products />,
      },
      {
        path: '/admin/create',
        element: <CreateProduct />,
      },
      {
        path: '/admin/clients',
        element: <Clients />,
      },

    ]
  },

]);
const App = () => {


  return (
    <AlertProvider>
      <RouterProvider router={router} />
    </AlertProvider>

  )
}

export default App;