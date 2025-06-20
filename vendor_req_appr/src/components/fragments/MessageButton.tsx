import * as React from 'react';

import IconButton from '@mui/material/IconButton';
import MessageIcon from '@mui/icons-material/Message';
import { Outlet,useNavigate,redirect } from 'react-router';

export default function MessageButton() {
  const navigate=useNavigate()
  const navigateToNotFoundPage=()=>{
    navigate('/NotFound')
  };

  return (
    <React.Fragment>
      <IconButton aria-label="message-icon" onClick={navigateToNotFoundPage} >
        <MessageIcon />
      </IconButton> 
    </React.Fragment>
  );
}
