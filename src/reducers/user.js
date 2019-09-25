import { LOGIN_USER } from '../actions/types';

const user = (state = null, action) => {
  switch (action.type) {
    case LOGIN_USER: {
      console.log(action);
      var user = JSON.parse(action.payload);
      return {
        ...user
      };
    }
    // no default
  }
  return state;
};

export default user;
