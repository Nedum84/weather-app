import { useState, useEffect } from "react";
import axiosClient from "../services/axios.client";

const useAxios = (props = {}) => {
  const [axiosData, setAxiosData] = useState({
    url: null,
    method: "GET",
    body: null,
    headers: null,
  });
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [statusCode, setStatusCode] = useState(null);

  // const abortCont = new AbortController();
  // recalls the fetch api with the same postdata info
  const fetchApi = async () => {
    setLoading(true);
    setData(null);
    setError(null);
    setStatusCode(null);
    try {
      const data = axiosData.body ? { data: axiosData.body } : {};
      const headers = axiosData.headers ? { headers: axiosData.headers } : {};
      const response = await axiosClient({
        url: axiosData.url,
        method: axiosData.method ? axiosData.method : "GET",
        // cancelToken: abortCont.signal,
        ...data,
        ...headers,
      });
      setLoading(false);
      setStatusCode(response.status);
      setData(response.data);

      if (props.onSuccess) props.onSuccess(response.data);
    } catch (error) {
      setLoading(false);
      setStatusCode(error.response.status);

      const errorData = error.response.data;
      if (errorData && errorData.message) {
        setError(String(errorData.message));
        if (props.onError) props.onError(errorData.message);
      } else {
        const errorMsg = error.message;
        setError(String(errorMsg));
        if (props.onError) props.onError(errorMsg);
      }
    }
  };

  useEffect(() => {
    if (axiosData.url != null) {
      fetchApi();
    }
    // abort the fetch if screen is dead/inactive
    // return () => abortCont.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [axiosData]);

  // return [setPostData, data, error, loading, status];
  return { axios: setAxiosData, data, error, loading, statusCode };
};

export default useAxios;
