import { instance } from '../instance';
import { CreatePaymentPayload, UpdatePaymentCallbackPayload } from './interface';

export const createPaymentService = async (payload: CreatePaymentPayload) => {
  return await instance.post('/create-payment', payload);
};

export const updatePaymentCallback = async (payload: UpdatePaymentCallbackPayload) => {
  return await instance.post('/update-payment-callback', payload);
};
