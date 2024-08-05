export interface Transaction {
  id: string;
  amount: number;
  currency: string;
  date: string;
  status: string;
  customer_id: string;
  customer_name: string;
  customer_email: string;
}
