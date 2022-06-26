import { useState, useCallback } from "react";

import axios from "axios";

const useAPI = (url, method = "GET") => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const callApi = useCallback(
    async (params, body) => {
      setLoading(true);
      try {
        const config = {
          method,
          url,
          params,
        };
        if (body) {
          config.data = body;
        }

        const response = await axios(config);

        setData(response.data);
        setLoading(false);
        setError("");
      } catch (error) {
        if (error?.response?.data?.error) {
          setError(error.response.data.error);
        } else {
          setError(error.message);
        }
        setLoading(false);
        setData(null);
      }
    },
    [url, method]
  );

  return {
    loading,
    data,
    error,
    callApi,
  };
};

export default useAPI;
