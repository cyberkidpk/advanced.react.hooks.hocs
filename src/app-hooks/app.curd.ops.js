import { useState, useEffect } from 'react';
import axios from 'axios';

const useCURDOps = ({
  url,
  method,
  body = null,
  headers = null,
}) => {
  const [resp, setResp] = useState(null);
  const [error, setError] = useState('');
  const [spinner, setSpinner] = useState(true);

  const fetchData = () => {
    axios[method](url, JSON.parse(headers), JSON.parse(body))
      .then((res) => {
        setResp(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setSpinner(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [method, url, body, headers]);

  return { resp, error, spinner };
};

export default useCURDOps;
