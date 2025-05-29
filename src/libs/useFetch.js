import { useState, useCallback } from 'react';

const useFetchLogger = () => {
  // Состояние с логами, инициализируем из localStorage
  const [logs, setLogs] = useState(() => {
    const saved = localStorage.getItem('apiLogs');
    return saved ? JSON.parse(saved) : [];
  });

  // Функция логирования fetch вызовов
  const logFetch = useCallback((url, options = {}, response) => {
    const log = {
      timestamp: new Date().toISOString(),
      url,
      method: options.method || 'GET',
      body: options.body || null,
      status: response?.status || 'unknown',
    };

    setLogs(prevLogs => {
      const updatedLogs = [...prevLogs, log];
      localStorage.setItem('apiLogs', JSON.stringify(updatedLogs));
      return updatedLogs;
    });

    console.log('Logged API call:', log);
  }, []);

  return { logs, logFetch };
};

export default useFetchLogger;
