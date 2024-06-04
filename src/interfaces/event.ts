export interface Event {
  category: string;
  code: string;
  cost: Cost;
  description: string;
  djs: string[];
  finish_date: number;
  google_location: string;
  image: string;
  location_address: string;
  location_name: string;
  name: string;
  objectID: string;
  purchase_end_date: number;
  purchase_start_date: number;
  start_date: number;
  status: number;
  tickets: Ticket[];
}

export interface Ticket {
  cost: number;
  id: string;
  name: string;
  quantity: number;
}

type Cost = 'FREE' | 'PAID' | 'MIXED';
