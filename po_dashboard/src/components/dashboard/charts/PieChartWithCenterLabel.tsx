'use client';

import * as React from 'react';
import { useEffect, useState } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import { vendorJSONData } from 'api'; // Make sure this is client-safe

const size = {
  width: 250,
  height: 250,
};

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 20,
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

export default function PieChartWithCenterLabel() {
  const [pieData, setPieData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const oVendorData = await vendorJSONData();
      const openDeliveries = oVendorData.vendor_dashboard.open_deliveries;

      // Count how many deliveries per status
      const statusCounts = openDeliveries.reduce((acc, curr) => {
        acc[curr.status] = (acc[curr.status] || 0) + 1;
        return acc;
      }, {});

      // Convert to format PieChart understands
      const formattedData = Object.entries(statusCounts).map(([status, count]) => ({
        label: status,
        value: count,
      }));

      setPieData(formattedData);
    }

    fetchData();
  }, []);

  return (
    <PieChart series={[{ data: pieData, innerRadius: 80 }]} {...size}>
      <PieCenterLabel></PieCenterLabel>
    </PieChart>
  );
}