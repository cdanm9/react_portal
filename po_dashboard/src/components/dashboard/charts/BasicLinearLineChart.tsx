'use client'; // This makes it a client component

import * as React from 'react';
import { useEffect, useState } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { vendorJSONData } from 'api'; // Ensure this can run in the browser

// Define TypeScript interfaces for data structure
interface Invoice {
  amount: number;
  status: string;
}

interface VendorDashboard {
  open_invoices: Invoice[];
}

interface VendorData {
  vendor_dashboard: VendorDashboard;
}

interface ChartData {
  xLabels: string[];
  yValues: number[];
}

const margin = { right: 24 };

export default function BasicLinearLineChart(): React.JSX.Element {
  const [data, setData] = useState<ChartData>({
    xLabels: [],
    yValues: [],
  });

  useEffect(() => {
    async function fetchData() {
      const oVendorData: VendorData = await vendorJSONData();
      const openInvoices = oVendorData.vendor_dashboard.open_invoices;

      const yValues = openInvoices.map((item) => item.amount);
      const xLabels = openInvoices.map((item) => item.status);

      setData({ xLabels, yValues });
    }

    fetchData();
  }, []);

  return (
    <LineChart
      height={300}
      series={[{ curve: 'linear', data: data.yValues, label: 'Amount' }]}
      xAxis={[{ scaleType: 'point', data: data.xLabels }]}
      yAxis={[{ width: 60 }]}
      margin={margin}
    />
  );
}
