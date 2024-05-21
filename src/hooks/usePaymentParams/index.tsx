import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { updatePaymentCallback } from 'src/services/payments';

const usePaymentParams = () => {
  const [searchParams] = useSearchParams();
  const [amount, setAmount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    updatePayment();
  }, []);

  const updatePayment = async () => {
    const amount_param = searchParams.get('amount');
    const id_param = searchParams.get('external_reference');
    const status_param = searchParams.get('status');

    if (!id_param || !status_param) {
      setError(true);
      setIsLoading(false);
      return;
    }

    await updatePaymentCallback({
      id: id_param,
      callbackStatus: status_param.charAt(0).toUpperCase() + status_param.slice(1),
    })
      .then(() => {
        if (amount_param) {
          const amount_number = Number(amount_param);
          setAmount(amount_number);
        }
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { amount, isLoading, error };
};

export default usePaymentParams;
