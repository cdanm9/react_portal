import * as React from 'react';
import { Outlet,useNavigate,redirect } from 'react-router';
import { ReactRouterAppProvider } from '@toolpad/core/react-router';
import type { Navigation } from '@toolpad/core/AppProvider';

//icons
import BusinessIcon from '@mui/icons-material/Business';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BarChartIcon from '@mui/icons-material/BarChart';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import HomeIcon from '@mui/icons-material/Home';


const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Purchase Order'
  },
  {
    segment: '',
    title: 'Home',
    icon: <HomeIcon />,
  },
  {
    segment: 'detail',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'orders',
    title: 'Orders',
    icon: <ListAltIcon />,
  },
  {
    segment: 'pocreate',
    title: 'Add Orders',
    icon: <AddShoppingCartIcon />,
  },
  {
    segment: 'poapprove',
    title: 'Approve Orders',
    icon: <CheckCircleIcon />,
  },
  {
    segment: 'poreport',
    title: 'View Orders',
    icon: <BarChartIcon />,
  },
  {
    kind: 'header',
    title: 'Vendor Portal'
  },
  {
    segment: 'request',
    title: 'Request',
    icon: <AssignmentIcon />,
    children: [
      {
        segment: 'vendor_request_management',
        title: 'Request Management',
        icon: <ManageAccountsIcon />,       
      },
      {
        segment: 'vendor_request_approval',
        title: 'Vendor Request Approval',
        icon: <HowToRegIcon />,
      },
      {
        segment: 'vendor_data_migration',
        title: 'Data Migration',
        icon: <SyncAltIcon />,
      },
    ],
  },
];

const BRANDING = {
  title: 'Vendor Portal',
  logo:<BusinessIcon/>
};



export default function App() {
  const [session, setSession] = React.useState<any>({
    user: {
      name: 'Chandan Moolya',
      email: 'dan.moolya@gmail.com',
      image: '',
    },
  });
  
  const navigate=useNavigate()
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
        setSession(null);
        window.location.href='/do/logout'
      },
    };
  }, []);
  return (
    <ReactRouterAppProvider navigation={NAVIGATION} branding={BRANDING} session={session} authentication={authentication}>
      <Outlet />
    </ReactRouterAppProvider>
  );
}
