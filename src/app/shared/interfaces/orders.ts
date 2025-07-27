export interface Order {
  id: string;
  customer?: {
    name: string;
    phone: string;
    address: string;
    occasion?: boolean;
  };
  products?: any[];
  name?: string;      
  quantity?: number;
  price?: number;
  address?: string;
  note?: string;
}
