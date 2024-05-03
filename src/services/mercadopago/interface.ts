export interface CreateMercadoPagoPayload {
  items: Item[];
  phone: string;
  user: string;
}

interface Item {
  title: string;
  quantity: number;
  unit_price: number;
}

export interface UpdatePaymentCallbackPayload {
  id: string;
  status: string;
}
