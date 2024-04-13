import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const usePaymentParams = () => {
  const [searchParams] = useSearchParams();
  const [amount, setAmount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const amount_param = searchParams.get('amount');

  useEffect(() => {
    if (amount_param && Number(amount_param) > 0) {
      setAmount(Number(amount_param));
      setIsLoading(false);
    }
  }, [amount_param]);

  return { isLoading, amount };
};

export default usePaymentParams;
