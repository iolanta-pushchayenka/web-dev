import { useCallback } from 'react';

const useFetch = () => {
  return useCallback((url, options, response) => {
    const log = {
      timestamp: new Date().toISOString(),      
      url,                                       
      method: options?.method || 'GET',          
      body: options?.body || null,              
      status: response?.status || 'unknown'      
    };

    const logs = JSON.parse(localStorage.getItem('apiLogs')) || [];
    logs.push(log);
    localStorage.setItem('apiLogs', JSON.stringify(logs));

    console.log('Logged API call:', log);
  }, []);
};

export default useFetch;
