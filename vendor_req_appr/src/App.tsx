import React from "react";
import "./App.css";
import MasterUser from "pages/MasterReqAppr";
import { Outlet,useNavigate,redirect } from 'react-router';

const App: React.FC = () => {
  return (
    <div className="App full-height">
      {/* <MasterUser />
       */}
      <Outlet/>
    </div>
  );
};

export default App;
