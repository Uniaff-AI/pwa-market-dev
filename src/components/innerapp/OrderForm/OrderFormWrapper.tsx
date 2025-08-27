import { useState, useEffect } from 'react';
import { OrderForm } from './OrderForm';

export const OrderFormWrapper = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const handleOrderButtonClick = () => {
      setIsFormOpen(true);
    };

    // Добавляем обработчик для кнопки в корзине
    const orderButton = document.getElementById('orderButton');
    if (orderButton) {
      orderButton.addEventListener('click', handleOrderButtonClick);
    }

    // Добавляем обработчик для кнопки на главной странице
    const mainOrderButton = document.getElementById('mainOrderButton');
    if (mainOrderButton) {
      mainOrderButton.addEventListener('click', handleOrderButtonClick);
    }

    return () => {
      if (orderButton) {
        orderButton.removeEventListener('click', handleOrderButtonClick);
      }
      if (mainOrderButton) {
        mainOrderButton.removeEventListener('click', handleOrderButtonClick);
      }
    };
  }, []);

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <OrderForm isOpen={isFormOpen} onClose={handleCloseForm} />
  );
};
