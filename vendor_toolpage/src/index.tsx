import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import App from './App';
import Layout from './layouts/dashboard';
import DashboardPage from './pages';
import OrdersPage from './pages/orders';

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
            Component: DashboardPage,
          },
          {
            path: 'orders',
            Component: OrdersPage,   
          },
        ],
      },
    ],
  },
],
{
  basename: '/vendor_toolpage/index.html',
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// import * as React from 'react';
// import * as ReactDOM from 'react-dom/client';
// import { createBrowserRouter, RouterProvider } from 'react-router';
// import App from './App';
// import DashboardPage from './pages';
// import OrdersPage from './pages/orders';
// import Layout from './layouts/dashboard';


// const router = createBrowserRouter([
//   {
//     Component: App, // root layout route
//     children: [
//       {
//         path: '/vendor_toolpage/index.html',
//         Component: Layout,
//         children: [
//           {
//             path: '',
//             Component: DashboardPage,
//           },
//           {
//             path: '/vendor_toolpage/index.html/orders',
//             Component: OrdersPage,
//           },
//         ],
//       },
//     ],
//   },
// ]);

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>,
// );