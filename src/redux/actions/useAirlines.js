import { airlinesApi, base_urlv1 } from "../../api/apiEndpoints";
import { useAxios } from "../../hooks/useAxios";
import { setAirlinesInfo } from "../../redux/slices/airlinesInfoSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";
const useAirlines = () => {
  const dispatch = useDispatch();
  const { response, fetchData } = useAxios();
  const airlines = () => {
    fetchData({
      baseURL: base_urlv1,
      url: airlinesApi,
      method: "GET",
    });
  };
  useEffect(() => {
    response == null
      ? dispatch(setAirlinesInfo({}))
      : dispatch(setAirlinesInfo(response?.data));
  }, [response]);
  return { airlines };
};
export default useAirlines;
