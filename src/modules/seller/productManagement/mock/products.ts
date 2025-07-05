interface Product {
  id: number;
  name: string;
  sku: string;
  stock: number;
  price: number;
}

export const mockProducts: Product[] = [
  { id: 1, name: 'Wireless Mouse', sku: 'WM-1001', stock: 34, price: 199 },
  { id: 2, name: 'Mechanical Keyboard', sku: 'MK-2042', stock: 15, price: 499 },
  { id: 3, name: '27" Monitor', sku: 'MN-3099', stock: 7, price: 1699 },
  { id: 4, name: 'USB-C Hub', sku: 'UC-8832', stock: 120, price: 149 },
  { id: 5, name: 'Laptop Stand', sku: 'LS-1105', stock: 62, price: 89 }
];
