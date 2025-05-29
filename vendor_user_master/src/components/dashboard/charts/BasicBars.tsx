'use client';

import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { useEffect, useState } from 'react';
import { vendorJSONData } from 'api';

// Define TypeScript interfaces for the data structure
interface OpenOrder {
  product: string;
  quantity: number;
}

interface VendorDashboard {
  open_orders: OpenOrder[];
}

interface VendorData {
  vendor_dashboard: VendorDashboard;
}

interface ChartData {
  labels: string[];
  quantities: number[];
}

export default function BasicBars(): React.JSX.Element {
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    quantities: [],
  });

  useEffect(() => {
    async function fetchData() {
      const oVendorData: VendorData = await vendorJSONData();
      const openOrders = oVendorData.vendor_dashboard.open_orders;

      const labels = openOrders.map((order) => order.product);
      const quantities = openOrders.map((order) => order.quantity);

      setChartData({ labels, quantities });
    }

    fetchData();
  }, []);

  return (
    <BarChart
      xAxis={[{ data: chartData.labels, scaleType: 'band' }]}
      series={[{ data: chartData.quantities }]}
      height={300}
    />
  );
}
