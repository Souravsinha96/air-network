import { loginApi } from '../api/apiEndpoints';
import axios from 'axios';
import store from '../redux/Store';
import { login } from '../redux/slices/userSlice';
import { toast } from 'react-toastify';

let refresh = false;

axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';

// axiosConfig.interceptors.request.use((config) => {
//   const state = store.getState();
//   console.log(state);

//   return config;
// });

axios.interceptors.response.use(
  (resp) => resp,
  async (error) => {
    toast.error(error.response?.data?.errors[0].title);
    if (error.response.status === 401 && !refresh) {
      refresh = true;
      console.log('reuns');

      const response = await axios.request({
        url: loginApi,
        method: 'POST',
        transformRequest: (data, headers) => {
          delete headers.common['Authorization'];
          return data;
        },
        data: `grant_type=client_credentials&client_id=${process.env.REACT_APP_AMADEUS_API_KEY}&client_secret=${process.env.REACT_APP_AMADEUS_API_SECRET}`,
      });
      console.log(response, response.data['access_token']);
      if (response.status === 200) {
        axios.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${response.data['access_token']}`;
        store.dispatch(login(response.data));
        return axios(error.config);
      }
    }
    refresh = false;
    return error;
  }
);
