export const dataset = [
    {
        "delivery_id": "DEL003",
        "product": "Widgets",
        "quantity": 150,
        "expected_delivery_date": "2024-12-18",
        "status": "Scheduled"
      },
      {
        "delivery_id": "DEL004",
        "product": "Gadgets",
        "quantity": 100,
        "expected_delivery_date": "2024-12-22",
        "status": "Scheduled"
      }
  ];
  
  export function valueFormatter(value: number | null) {
    return `${value} Units`;
  }