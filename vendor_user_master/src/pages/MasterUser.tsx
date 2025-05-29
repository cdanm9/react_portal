import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: 'id', headerName: 'Sr No', width: 90 },
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
    type: 'number',
    width: 75,
    editable: true,
  },
  {
    field: 'USER_ROLE',
    headerName: 'User Role',
    description: 'User Role',
    sortable: false,
    width: 75
  },
  {
    field: 'ACTIVE',
    headerName: 'Action',
    description: 'Action',
    sortable: false,
    width: 160,
    renderCell: (params) => (
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton> 
    ),

  },
];

const rows = [
  {
    "ACTIVE": "X",
    "COMPANY_CODE": "1000",
    "CREATED_ON": "2024-03-28T12:06:01.030Z",
    "EMAIL": "komal.w@intellectbizware.com",
    "EMP_NO": "null",
    "SR_NO": 28,
    "id": 28,
    "UPDATED_ON": "2024-04-03T06:29:44.151Z",
    "USER_ID": "komal.w@intellectbizware.com",
    "USER_NAME": "Wagh Komal",
    "USER_ROLE": "BYR"
  },
  {
    "ACTIVE": "X",
    "COMPANY_CODE": "1000",
    "CREATED_ON": "2024-03-28T12:06:01.030Z",
    "EMAIL": "swaroop.n@intellectbizware.com",
    "EMP_NO": "null",
    "SR_NO": 29,
    "id": 29,
    "UPDATED_ON": "2024-04-03T06:29:59.206Z",
    "USER_ID": "P2000673239",
    "USER_NAME": "Swaroop Nagavarapu",
    "USER_ROLE": "PM"
  },
  {
    "ACTIVE": "X",
    "COMPANY_CODE": "1000,1010",
    "CREATED_ON": "2023-11-03T10:07:41.982Z",
    "EMAIL": "supritha.m@intellectbizware.com",
    "EMP_NO": "null",
    "SR_NO": 9,
    "id": 9,
    "UPDATED_ON": "2024-05-07T07:42:38.848Z",
    "USER_ID": "supritha.m@intellectbizware.com",
    "USER_NAME": "Supritha Moolya",
    "USER_ROLE": "BYR,QA"
  },
  {
    "ACTIVE": "X",
    "COMPANY_CODE": "1000,1010",
    "CREATED_ON": "2023-11-28T12:33:56.529Z",
    "EMAIL": "siddhesh.d@intellectbizware.com",
    "EMP_NO": "null",
    "SR_NO": 14,
    "id": 14,
    "UPDATED_ON": "2025-05-23T09:29:56.221Z",
    "USER_ID": "P000080",
    "USER_NAME": "Dingankar Siddhesh",
    "USER_ROLE": "PM"
  },
];

export default function MasterUser() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        showToolbar
      />
    </Box>
  );
}



// 'use client';
// import React from 'react';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';   

// // Chart components
// import KPICard from 'components/dashboard/cards/KPICard';
// import BasicBars from 'components/dashboard/charts/BasicBars';
// import PieChartWithCenterLabel from 'components/dashboard/charts/PieChartWithCenterLabel';
// import BasicLinearLineChart from 'components/dashboard/charts/BasicLinearLineChart';
// import HorizontalBars from 'components/dashboard/charts/HorizontalBars';

// const Dashboard: React.FC = () => {
//   return (
//     <Box sx={{ mt: 4, px: { xs: 2, sm: 3, md: 4 } }}>
//     <Grid container rowSpacing={4.5} columnSpacing={2.75}>
//       <Grid sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} size={{ md: 8 }} />
//       <Grid size={{ xs: 12, sm: 6, md: 6, lg: 3 }}>
//         <KPICard type="total" count={26} label="Total Received" color="#d1c4e9" gradient="linear-gradient(135deg, #7e57c2, #9575cd)" />
//       </Grid>
//       <Grid size={{ xs: 12, sm: 6, md: 6, lg: 3 }}>
//         <KPICard type="completed" count={2} label="Completed" color="#a5d6a7" gradient="linear-gradient(135deg, #43a047, #66bb6a)"  />
//       </Grid>
//       <Grid size={{ xs: 12, sm: 6, md: 6, lg: 3 }}>
//          <KPICard type="progress" count={24} label="In Progress" color="#ffcc80" gradient="linear-gradient(135deg, #fb8c00, #ffa726)"  />
//       </Grid>
//       <Grid size={{ xs: 12, sm: 6, md: 6, lg: 3 }}>
//         <KPICard type="rejected" count={0} label="Rejected" color="#ef9a9a" gradient="linear-gradient(135deg, #e53935, #ef5350)"  />
//       </Grid>
//       <Grid sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} size={{ md: 8 }} />
//       {/* row 2 */}
      
//       <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }} >
//         <BasicBars/>   
//       </Grid>
//       <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }} >
//         <PieChartWithCenterLabel/>
//       </Grid>
//       {/* row 3 */}  
      
//       <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }} >
//         <BasicLinearLineChart/>   
//       </Grid>
//       <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }} >
//         <HorizontalBars/>   
//       </Grid>
//       {/* row 4 */}   
//     </Grid>
//     </Box>
//   );
// };

// export default Dashboard;