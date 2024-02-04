export interface Form {
  email: string;
  isLoading: boolean;
  phone: string;
  tickets: Ticket[];
}

interface Ticket {
  cost: number;
  id: string;
  name: string;
  quantity: number;
}
