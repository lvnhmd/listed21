import { LOGIN_USER } from '../actions/types';

export const login = user => {
  return {
    type: LOGIN_USER,
    user
  };
};
