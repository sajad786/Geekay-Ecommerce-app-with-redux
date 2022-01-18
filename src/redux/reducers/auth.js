import { setUserData } from '../../utils/utils';
import types from '../types';

const initial_state = {
  userData: {},
  isLogin: false,
};

export default function (state = initial_state, action) {
  switch (action.type) {
    // case types.ISLOADING:
    //   const data = action.payload;
    //   return {isLoading: data};
    case types.IS_LOGIN:
      return {isLogin: action.payload};
    case types.VERIFY_OTP:
      const userResponseData = action.payload;
      console.log(
        'otp data  at reducer on successful otp verify',
        userResponseData,
      );
      return {...state, userData: userResponseData};

    case types.FB_LOGIN:
      const userFbData = action.payload;
      console.log('social Data at reducer ', userFbData);
      return {...state, userData: userFbData};

    case types.CLEAR_REDUX_STATE:
      return {userData: ''};
    default:
      return {...state};
  }
}
