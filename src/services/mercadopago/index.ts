import { instance } from '../instance';
import { CreateMercadoPagoPayload, UpdatePaymentCallbackPayload } from './interface';

export const createMercadoPagoService = async (payload: CreateMercadoPagoPayload) => {
  return await instance.post('/create-payment-mercadopago', payload);
};

export const updatePaymentCallback = async (payload: UpdatePaymentCallbackPayload) => {
  return await instance.post('/update-payment-callback', payload);
};
