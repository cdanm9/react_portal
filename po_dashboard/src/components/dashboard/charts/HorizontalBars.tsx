import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { useEffect, useState } from 'react';
import { vendorJSONData } from 'api'; // must be callable in the browser

// Define the structure of each delivery item
interface Delivery {
  product: string;
  quantity: number;
}

interface VendorDashboard {
  upcoming_deliveries: Delivery[];
}

interface VendorData {
  vendor_dashboard: VendorDashboard;
}

const chartSetting = {
  xAxis: [
    {
      label: 'Quantity',
    },
  ],
  height: 320,
};

export default function HorizontalBars(): React.JSX.Element {
  const [dataset, setDataset] = useState<Delivery[]>([]);

  useEffect(() => {
    async function fetchUpcomingData() {
      const oVendorData: VendorData = await vendorJSONData();
      const upcomingDeliveries = oVendorData.vendor_dashboard.upcoming_deliveries;
      setDataset(upcomingDeliveries);
    }

    fetchUpcomingData();
  }, []);

  return (
    <BarChart
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'product' }]}
      series={[{ dataKey: 'quantity', label: 'Delivery Quantity' }]}
      layout="horizontal"
      {...chartSetting}
    />
  );
}
