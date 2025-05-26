import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';

const data=[{
  "delivery_id": "DEL001",
  "dispatch_date": "2024-12-07",
  "expected_delivery_date": "2024-12-12",
  "label": "In Transit",
  "value":50
},
{
  "delivery_id": "DEL002",
  "dispatch_date": "2024-12-10",
  "expected_delivery_date": "2024-12-15",
  "label": "Pending",
  "value":50
}]

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

function PieCenterLabel({ children }: { children: React.ReactNode }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

export default function PieChartWithCenterLabel() {
  return (
    <PieChart series={[{ data, innerRadius: 80 }]} {...size}>
      <PieCenterLabel>Order Status</PieCenterLabel>
    </PieChart>
  );
}
