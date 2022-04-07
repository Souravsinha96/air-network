import { useState } from "react";
import axios from "axios";
export const useAxios = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async (params) => {
    try {
      const result = await axios.request(params);
      setResponse(result);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return { response, error, loading, fetchData };
};
