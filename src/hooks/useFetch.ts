import axios from 'axios';
import {useState} from 'react';

type Endpoint = {
  endpoint: string;
};

const useFetch = (request: Endpoint) => {
  const [isLoading, setIsLoading] = useState<boolean>();
  const [isError, setIsError] = useState<boolean>();
  const BASE_URL = 'http://localhost:8080/api/';
  const options = {
    method: 'GET',
    url: BASE_URL + request.endpoint,
  };

  const get = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      console.log('GET:', request.endpoint, response.status);
      if (response) {
        return response.data;
      }
    } catch (e) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
    return null;
  };

  return {get, isLoading, isError};
};

export default useFetch;
