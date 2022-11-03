import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_WEB_SERVER_URL;
console.log(process.env);

export async function fetchUser({ queryKey }) {
  // eslint-disable-next-line no-unused-vars
  const [_key, { userID }] = queryKey;
  const response = await axios.get(`users/${userID}`);
  return response.data;
}
