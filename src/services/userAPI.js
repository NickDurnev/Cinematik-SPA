import axios from 'axios';

const baseURL = 'https://nodejs-cinematik-rest-api.onrender.com/';

export async function fetchUser({ queryKey }) {
  // eslint-disable-next-line no-unused-vars
  const [_key, { dbUserID }] = queryKey;
  const response = await axios.get(`${baseURL}users/${dbUserID}`);
  return response.data;
}
