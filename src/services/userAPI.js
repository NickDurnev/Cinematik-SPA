import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = process.env.REACT_APP_WEB_SERVER_URL;
console.log(process.env);

export async function fetchUser() {
  const response = await axios.get(`users/63601dc0e819427bc7bfb997`);
  return response.data.data.user;
}
