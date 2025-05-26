import vendorDashboardData from 'assets/vendorDashboard.json';

// ✅ Interfaces
export interface OpenOrder {
  order_id: string;
  order_date: string;
  product: string;
  quantity: number;
  due_date: string;
  status: string;
}

export interface OpenDelivery {
  delivery_id: string;
  dispatch_date: string;
  expected_delivery_date: string;
  status: string;
  percent: number;
}

export interface OpenInvoice {
  invoice_id: string;
  invoice_date: string;
  amount: number;
  due_date: string;
  status: string;
}

export interface UpcomingDelivery {
  delivery_id: string;
  product: string;
  quantity: number;
  expected_delivery_date: string;
  status: string;
}

export interface GoodsReceipt {
  grn_id: string;
  date: string;
  order_id: string;
  delivery_id: string;
  status: string;
}

export interface VendorDashboardData {
  vendor_dashboard: {
    open_orders: OpenOrder[];
    open_deliveries: OpenDelivery[];
    open_invoices: OpenInvoice[];
    upcoming_deliveries: UpcomingDelivery[];
    goods_receipt_status: GoodsReceipt[];
  };
}

// ✅ Function that logs and returns the data
export const vendorJSONData = async (): Promise<VendorDashboardData> => {
  console.log("Vendor Dashboard Data:", vendorDashboardData);
  return vendorDashboardData as VendorDashboardData;
};
