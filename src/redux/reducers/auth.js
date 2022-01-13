import { setUserData } from '../../utils/utils';
import types from '../types';

const initial_state = {
  userData: {},
  isLogin: false,
};

export default function (state = initial_state, action) {
  switch (action.type) {
    // case types.LOGIN:
    //   const data = action.payload;
    //   return {userData: data};
    case types.IS_LOGIN:
      return {isLogin: action.payload};
    case types.VERIFY_OTP:
      const userResponseData = action.payload;
      console.log('otp data  at reducer on successful otp verify', userResponseData);
      return {...state, userData: userResponseData};
      
      case types.CLEAR_REDUX_STATE :
        return {userData: ""};
    default:
      return {...state};
  }
}
