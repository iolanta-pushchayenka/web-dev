import React, { useEffect } from 'react';
import useFetchLogger from './libs/useFetch';

const ordersAPI = 'https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/orders';

const Orders = () => {
  const { logFetch } = useFetchLogger();

  const fetchOrders = async () => {
    try {
      const response = await fetch(ordersAPI);

      logFetch(ordersAPI, { method: 'GET' }, {
        status: response.status,
        ok: response.ok
      });

      if (!response.ok) {
        return;
      }

      const data = await response.json();
      console.log('Загруженные заказы:', data);      
    } catch (err) {
      console.error('Ошибка при загрузке заказов:', err);

      
      logFetch(ordersAPI, { method: 'GET' }, {
        status: 'network_error',
        ok: false
      });
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div>
      {/*<button onClick={fetchOrders}>Загрузить заказы</button>*/}

       {/*<h3>История логов API запросов:</h3>*/}
       {/*<pre>{JSON.stringify(logs, null, 2)}</pre>*/}
    </div>
  );
};


export default Orders;

