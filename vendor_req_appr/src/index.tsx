import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter,createHashRouter, RouterProvider } from 'react-router';
import App from './App';
import Layout from './layouts/Layout';
import MasterReqAppr from './pages/MasterReqAppr';
import  NotFound from './pages/NotFound';
import {getCheckServiceAvailablity} from "api/index";

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
            Component: MasterReqAppr,
            // loader: async ({ params }) => {
            //   const checkServiceAvailibility=await getCheckServiceAvailablity();
            //   return checkServiceAvailibility;
            // },
          },
          {
            path: 'NotFound',
            Component: NotFound,   
          },
          {
            path: '*',
            Component: NotFound,   
          }
        ],
      },
    ],
  },
],
{
  basename: '/vendor_req_appr/index.html'
});

// const router = createHashRouter([
//   {
//     Component: App,
//     children: [
//       {
//         path: '',
//         Component: Layout,
//         children: [
//           {
//             path: '',
//             Component: MasterReqAppr,
//           },
//           {
//             path: 'NotFound',
//             Component: NotFound,   
//           }
//         ],
//       },
//       {
//         path: 'NotFound',    
//         Component: NotFound,   
//       },
//     ],
//   },
// ],
// {
//   basename: '/vendor_req_appr/index.html',
//   // basename: ''
// });


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);


