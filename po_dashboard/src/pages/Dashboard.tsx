'use client';
import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';   

// Chart components
import KPICard from 'components/dashboard/cards/KPICard';
import BasicBars from 'components/dashboard/charts/BasicBars';
import PieChartWithCenterLabel from 'components/dashboard/charts/PieChartWithCenterLabel';
import BasicLinearLineChart from 'components/dashboard/charts/BasicLinearLineChart';
import HorizontalBars from 'components/dashboard/charts/HorizontalBars';

const Dashboard: React.FC = () => {
  return (
    <Box sx={{ mt: 4, px: { xs: 2, sm: 3, md: 4 } }}>
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      <Grid sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} size={{ md: 8 }} />
      <Grid size={{ xs: 12, sm: 6, md: 6, lg: 3 }}>
        <KPICard type="total" count={26} label="Total Received" color="#d1c4e9" gradient="linear-gradient(135deg, #7e57c2, #9575cd)" />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 6, lg: 3 }}>
        <KPICard type="completed" count={2} label="Completed" color="#a5d6a7" gradient="linear-gradient(135deg, #43a047, #66bb6a)"  />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 6, lg: 3 }}>
         <KPICard type="progress" count={24} label="In Progress" color="#ffcc80" gradient="linear-gradient(135deg, #fb8c00, #ffa726)"  />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 6, lg: 3 }}>
        <KPICard type="rejected" count={0} label="Rejected" color="#ef9a9a" gradient="linear-gradient(135deg, #e53935, #ef5350)"  />
      </Grid>
      <Grid sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} size={{ md: 8 }} />
      {/* row 2 */}
      
      <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }} >
        <BasicBars/>   
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }} >
        <PieChartWithCenterLabel/>
      </Grid>
      {/* row 3 */}  
      
      <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }} >
        <BasicLinearLineChart/>   
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }} >
        <HorizontalBars/>   
      </Grid>
      {/* row 4 */}   
    </Grid>
    </Box>
  );
};

export default Dashboard;