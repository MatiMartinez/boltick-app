export interface CreateMercadoPagoPayload {
  items: Item[];
  user: string;
}

export interface Item {
  title: string;
  quantity: number;
  unit_price: number;
}
