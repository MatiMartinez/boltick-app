import { instance } from '../instance';
import { CreateMercadoPagoPayload } from './interface';

export const createMercadoPagoService = async (payload: CreateMercadoPagoPayload) => {
  return await instance.post('/create-payment-mercadopago', payload);
};
