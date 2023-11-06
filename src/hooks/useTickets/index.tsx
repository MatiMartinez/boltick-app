import { useState } from 'react';
import { createMercadoPagoService } from 'src/services/mercadopago';

interface Ticket {
  quantity: number;
}

const useTickets = () => {
  const [general, setGeneral] = useState<Ticket>({ quantity: 0 });
  const [vips, setVips] = useState<Ticket>({ quantity: 0 });

  const addGeneral = () => {
    setGeneral((prevState) => ({ ...prevState, quantity: prevState.quantity + 1 }));
  };

  const removeGeneral = () => {
    setGeneral((prevState) => ({ ...prevState, quantity: prevState.quantity - 1 }));
  };

  const addVip = () => {
    setVips((prevState) => ({ ...prevState, quantity: prevState.quantity + 1 }));
  };

  const removeVip = () => {
    setVips((prevState) => ({ ...prevState, quantity: prevState.quantity - 1 }));
  };

  const onSubmit = async () => {
    const newArr = [];

    if (general.quantity > 0) {
      newArr.push({
        title: 'normal',
        quantity: general.quantity,
        unit_price: 2000,
      });
    }

    if (vips.quantity > 0) {
      newArr.push({
        title: 'vips',
        quantity: vips.quantity,
        unit_price: 3000,
      });
    }

    await createMercadoPagoService({
      items: newArr,
      user: 'test_user@gmail.com',
    }).then((response) => {
      window.location.href = response.data.url;
    });
  };

  return { general, vips, addGeneral, removeGeneral, addVip, removeVip, onSubmit };
};

export default useTickets;
