import { useState } from 'react';

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

  return { general, vips, addGeneral, removeGeneral, addVip, removeVip };
};

export default useTickets;
