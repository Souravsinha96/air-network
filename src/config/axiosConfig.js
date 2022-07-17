import { base_urlv1 } from "../api/apiEndpoints";
import axios from "axios";

export const axiosConfig = axios.create({
  baseURL: base_urlv1,
  headers: { "content-type": "application/x-www-form-urlencoded" },
});
