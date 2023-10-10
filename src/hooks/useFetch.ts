import axios from 'axios';
import {useState} from 'react';

type Endpoint = {
  endpoint: string;
};

const useFetch = <T>(request: Endpoint) => {
  const [isLoading, setIsLoading] = useState<boolean>();
  const [isError, setIsError] = useState<boolean>();
  const BASE_URL = 'http://localhost:8080/api/';
  const options = {
    method: 'GET',
    url: BASE_URL + request.endpoint,
  };

  const get = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await axios.request(options);
      console.log('GET:', request.endpoint, response.status);
      if (response) {
        return response.data;
      }
    } catch (e) {
      console.log('GET error:', e);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
    return null;
  };

  const post = async (data: T) => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await axios.post(options.url, data);
      console.log('POST:', request.endpoint, response.status);
      if (response) {
        return response.data;
      }
    } catch (e) {
      console.log('Post error:', e);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
    return null;
  };

  const deleteRequest = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      options.method = 'DELETE';
      console.log('aici ba: ', request.endpoint);
      const response = await axios.delete(options.url);
      if (response) {
        return response.data;
      }
    } catch (e) {
      console.log('Delete error:', e);
      console.log('da?');
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
    return null;
  };

  return {get, post, deleteRequest, isLoading, isError};
};

export default useFetch;
