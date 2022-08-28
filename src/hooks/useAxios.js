import { useState } from "react";
import { loading } from "../redux/slices/loaderSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";
export const useAxios = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.user?.access_token);
  // const [response, setResponse] = useState(null);
  // const [errorData, setError] = useState("");

  const fetchData = async (params) => {
    let result = null;
    try {
      dispatch(loading(true));
      result = await axios.request(params);
    } catch (error) {
      toast.error(error.response?.data.errors[0].title);
    } finally {
      dispatch(loading(false));
    }
    return result;
  };
  return { fetchData };
};
