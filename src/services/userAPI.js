import axios from 'axios';

axios.defaults.baseURL = 'https://nodejs-cinematik-rest-api.onrender.com/';

export async function fetchUser({ queryKey }) {
  // eslint-disable-next-line no-unused-vars
  const [_key, { userID }] = queryKey;
  const response = await axios.get(`users/${userID}`);
  return response.data;
}
