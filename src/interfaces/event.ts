export interface Event {
  category: string;
  code: string;
  cost: Cost;
  description: string;
  djs: string[];
  finish_date: number;
  image: string;
  location_address: string;
  location_name: string;
  name: string;
  objectID: string;
  start_date: number;
  tickets: Ticket[];
}

export interface Ticket {
  cost: number;
  id: string;
  name: string;
  quantity: number;
}

type Cost = 'FREE' | 'PAID' | 'MIXED';
