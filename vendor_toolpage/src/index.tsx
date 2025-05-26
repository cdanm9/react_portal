import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import App from './App';
import Layout from './layouts/dashboard';
import Detail from './pages/Detail';

const router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        path: '/',
        Component: Layout,
        children: [
          {
            path: '',
            Component: Detail,
          },
          // {
          //   path: 'orders',
          //   Component: Detail,   
          // },
          // {
          //   path: 'detail',
          //   Component: Detail,   
          // },
        ],
      },
    ],
  },
],
{
  basename: '/vendor_toolpage/index.html'
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
