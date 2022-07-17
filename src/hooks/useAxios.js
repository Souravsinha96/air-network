import { useState } from "react";
import { loading } from "../redux/slices/loaderSlice";
import { axiosConfig } from "../config/axiosConfig";
import { useDispatch } from "react-redux";
export const useAxios = () => {
  const dispatch = useDispatch();
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  // const [loading, setLoading] = useState(true);

  const fetchData = async (params) => {
    try {
      dispatch(loading(true));
      const result = await axiosConfig.request(params);
      setResponse(result);
    } catch (error) {
      setError(error);
    } finally {
      dispatch(loading(false));
    }
  };
  return { response, error, fetchData };
};
