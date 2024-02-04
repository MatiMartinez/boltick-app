export interface CreateMercadoPagoPayload {
  items: Item[];
  phone: string;
  user: string;
}

export interface Item {
  title: string;
  quantity: number;
  unit_price: number;
}
