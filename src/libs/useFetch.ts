import { useState, useCallback } from 'react';

type FetchOptions = {
  method?: string;
  body?: any;
};

type FetchResponse = {
  status?: number | string;
  ok?: boolean;
};

type LogEntry = {
  timestamp: string;
  url: string;
  method: string;
  body: any;
  status: number | string;
};



const useFetchLogger = () => {

  const [logs, setLogs] = useState<LogEntry[]>(() => {
    const saved = localStorage.getItem('apiLogs');
    return saved ? JSON.parse(saved) : [];
  });


  const logFetch = useCallback(
    (url: string, options: FetchOptions = {}, response: FetchResponse) => {
    const log: LogEntry = {
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
