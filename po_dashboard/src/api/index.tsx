import axios from 'axios';

// Interfaces for API response types
export interface Plant {
  id: string;
  name: string;
}

interface TableResponse<T> {
  d?: {
    results: T[];
  };
  value?: T[];
}

export interface VendorDashboardData {
  vendor_dashboard: {
    open_orders: Array<{ product: string; quantity: number }>;
    open_invoices: Array<{ status: string; amount: number }>;
    upcoming_deliveries: Array<{ product: string; quantity: number }>;
  };
}

const baseURL = 'POAdvanced/odata/v4/pocreation';

const instance = axios.create({
  baseURL,
});

export const getTableData = async (
  params: { $top?: number; $skip?: number } = { $top: 100, $skip: 0 }
): Promise<Plant[]> => {
  const { data } = await instance.get<TableResponse<Plant>>('/Plants', { params });
  return data.d?.results || data.d || data.value || [];
};

export const getTableCount = async (): Promise<number> => {
  const { data } = await instance.get<number>('/Plants/$count');
  return data;
};

// This is now importing the JSON correctly with type safety
export const vendorJSONData = async (): Promise<VendorDashboardData> => {
  return vendorDashboardData as VendorDashboardData;
};
