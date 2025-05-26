import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { dataset, valueFormatter } from 'assets/vendorData';

const chartSetting = {
  xAxis: [
    {
      label: 'Quantity',
    },
  ],
  height: 300,
};

export default function HorizontalBars() {  
  return (
    <BarChart
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'product' }]}
      series={[{ dataKey: 'quantity', label: 'Quantity', valueFormatter }]}
      layout="horizontal"
      {...chartSetting}
    />
  );
}

