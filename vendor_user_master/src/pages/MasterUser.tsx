import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

import { DataGrid, GridColDef,
  Toolbar,
  ToolbarButton,
  ColumnsPanelTrigger
  } from '@mui/x-data-grid';


import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import BusinessIcon from '@mui/icons-material/Business';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

import UserDialog from 'components/fragments/UserDialog'
import DeleteDialog from 'components/fragments/DeleteDialog'

import { getMasterIvenUsersData, getMasterIvenUsersCount,getMasterUserRole,getMasterEntityCode } from "api";



function CustomToolbar() {
  return (
    <Toolbar>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          px: 2,
          py: 1,
        }}
      >
        
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          px: 1.5,
          py: 0.5,
          borderRadius: 1,
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.04)', // light hover effect
            boxShadow: 1, // subtle shadow
            cursor: 'text',
          },
        }}>
          <SearchIcon />
          <InputBase placeholder="Search…" />
        </Box>

        <UserDialog/>
      </Box>
    </Toolbar>
  );
}

interface MasterIvenUser {
  ACTIVE: boolean | null;
  EMAIL: string;
  EMP_NO: string | null;
  ID: string;
  SR_NO: string | null;
  USER_ID: string;
  USER_NAME: string;
  createdAt: string | null;
  createdBy: string | null;
  modifiedAt: string | null;
  modifiedBy: string | null;
  HasActiveEntity: boolean;
  HasDraftEntity: boolean;
  IsActiveEntity: boolean;
}

export interface IvenUserRow extends MasterIvenUser {
  id: number;
}


const columns: GridColDef<IvenUserRow>[] = [
  { field: 'id', headerName: 'Sr No', width: 90 ,hideable:true},
  {
    field: 'USER_ID',
    headerName: 'User ID',
    width: 300,
    editable: true,
  },
  {
    field: 'USER_NAME',
    headerName: 'User Name',
    width: 300,
    editable: true,
  },
  {
    field: 'COMPANY_CODE',
    headerName: 'Company',
    width: 150,
    editable: true,
    renderCell: (params) => (
      <Box>
        <IconButton aria-label="company">
          <BusinessIcon />
        </IconButton> 
      </Box>
    ),
  },
  {
    field: 'USER_ROLE',
    headerName: 'User Role',
    description: 'User Role',
    sortable: false,
    width: 100,
    renderCell: (params) => (
        <IconButton aria-label="edit">
          <LockPersonIcon />
        </IconButton> 
    )
  },
  {
    field: 'ACTIVE',
    headerName: 'Action',
    description: 'Action',
    sortable: false,
    width: 160,
    renderCell: (params) => (
      <Box>
        <IconButton aria-label="edit">
          <EditIcon />
        </IconButton> 
        <DeleteDialog/>
      </Box>
    ),

  },
];


export default function MasterUser() {

  const [rows, setRows] = React.useState<IvenUserRow[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await getMasterIvenUsersData({ $top: 10000, $skip: 0 });
      const typedData: IvenUserRow[] = data.map((item: MasterIvenUser, index: number) => ({
        ...item,
        id: index,
      }));
      setRows(typedData);
    };

    fetchData();
  }, []);
  // const oIvenUserMasterData = await getMasterIvenUsersData({
  //   $top: 10000,
  //   $skip: 0
  // });
  // const rows = oIvenUserMasterData.map((item, index) => {
  //   item.id = index;
  //   return item;
  // });

  // const rows: IvenUserRow[] = oIvenUserMasterData.map((item, index) => ({
  //   ...item,
  //   id: index,
  // }));
  
  return (
    <Box sx={{ height: '800px', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: CustomToolbar }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
        showToolbar
        slotProps={{
          basePopper: {
            placement: 'bottom-start',
          }
        }}
      />
    </Box>
  );
}


