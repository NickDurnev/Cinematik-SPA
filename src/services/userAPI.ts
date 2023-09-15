import axios from 'axios';
import { QueryFunctionContext } from 'react-query';
import { IUser, IParams } from './interfaces';

const baseURL = 'https://nodejs-cinematik-rest-api.onrender.com/';

interface IResult {
  data: { user: IUser };
}

export const fetchUser = async (
  params: QueryFunctionContext<IParams['params']>
): Promise<IResult> => {
  const [, { dbUserID }] = params.queryKey;
  const response = await axios.get(`${baseURL}users/${dbUserID}`);
  return response.data;
};
