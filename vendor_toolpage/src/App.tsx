import * as React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ReactRouterAppProvider } from '@toolpad/core/react-router';
import { Outlet } from 'react-router';
import type { Navigation } from '@toolpad/core';

const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Purchase Order Items',     
  },
  {
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'orders',
    title: 'Orders',
    icon: <ShoppingCartIcon />,
  },
];

const BRANDING = {
  title: 'Vendor Portal',
};



// Types
type SessionUser = {
  name?: string;
  email?: string;
  image?: string;
};

type Session = {
  user: SessionUser;
} | null;

type Authentication = {
  signIn: () => void;
  signOut: () => void;
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function App() {

  const [session, setSession] = React.useState({
    user: {
      name: 'Chandan Moolya',
      email: 'dan.moolya@gmail.com',
      image: '',
    },
  });

  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        setSession({
          user: {
            name: 'Chandan Moolya',
            email: 'dan.moolya@gmail.com',
            image: '',
          },
        });
      },
      signOut: () => {
        setSession({
          user: {
            name: '',
            email: '',
            image: '',
          },
        });
        window.location.href = '/coretool/do/logout';
      },
    };
  }, []);

  return (
    <ReactRouterAppProvider navigation={NAVIGATION} branding={BRANDING} session={session} authentication={authentication}>   
      <Outlet />
    </ReactRouterAppProvider>
  );
}

// import React from "react";
// import "./App.css";
// import NotFound from "pages/NotFound";
// import AppBar from "components/AppBar";
// import MasterPage from "pages/MasterPage";

// const App = () => {
//   return (
//     <div className="App full-height">
//       <AppBar />
//       <MasterPage />
//     </div>
//   );
// };

// export default App;
