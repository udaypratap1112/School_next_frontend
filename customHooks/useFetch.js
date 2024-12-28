

import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url, method = 'GET', body = null, headers = { 'Content-Type': 'application/json' }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch data using Axios
  const fetchData = async (customBody = null) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios({
        url,
        method,
        headers,
        data: customBody || body,
      });
     setData(response.data);
    } catch (err) {
        // console.log(err.response);
      setError(err.response?err.response.data.message:'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  // Auto-fetch data for GET requests when URL or method changes
  useEffect(() => {
    if (method === 'GET') {
      fetchData();
    }
  }, [url, method]);

  // Function to execute POST or PUT requests manually
  const executeRequest = async (customBody = null) => {
    if (method === 'GET') {
      throw new Error('GET requests cannot have a body.');
    }
    await fetchData(customBody);
  };

  return { data, loading, error,executeRequest, refetch: fetchData };
};

export default useFetch;
