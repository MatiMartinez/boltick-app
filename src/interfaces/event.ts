export interface Event {
  category: string;
  code: string;
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

export interface DJ {
  name: string;
  instagram?: string;
  twitter?: string;
}

export interface Ticket {
  name: string;
  cost: number;
}
