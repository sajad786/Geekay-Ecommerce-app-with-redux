import {LOGIN, LOGOUT, SIGNUP, VERIFY_OTP} from '../../config/urls';
import {
  GoogleLogIn,
  onFbLogin,
} from '../../Screens/SignUpScreen/helperFunction';
import {apiGet, apiPost, clearUserData, setUserData} from '../../utils/utils';
import store from '../store';
import types from '../types';

const {dispatch} = store;

export const saveUserData = data => {
  dispatch({
    type: types.VERIFY_OTP,
    payload: data,
  });
};

// export const loading = data => {
//   console.log('is Loading', data);
//   dispatch({
//     type: types.ISLOADING,
//     payload: data,
//   });
// };

export function otpVerify(data) {
  console.log('verify otp data  in actions', data);

  return new Promise((resolve, reject) => {
    return apiPost(VERIFY_OTP, data)
      .then(res => {
        console.log('Log in successful', res);
        if (res.data.access_token) {
          setUserData(res.data).then(() => {
            resolve(res);
            console.log('data coming from async at actions after storing', res);
            saveUserData(res.data);
          });
          return;
        }
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
}

//  promise  fb login other way

// export function fbLogin() {
//   // console.log('fb data in actions', data);

//   return new Promise((resolve, reject) => {
//     return FbLogin(_responseInfoCallback)
//       .then(res => {
//         console.log('FbLog in successful', res);
//         if (res.id) {
//           setUserData(res).then(() => {
//             resolve(res);
//             console.log(
//               'data coming from async at actions after storing',
//               res,
//             );
//             saveFbUserData(res);
//           });
//           return;
//         }
//         resolve(res);
//       })
//       .catch(error => {
//         reject(error);
//       });
//   });
// }

export const saveFbUserData = data => {
  console.log('lets dispatch fb data', data);
  dispatch({
    type: types.FB_LOGIN,
    payload: data,
  });
};

// facebook Login Function

export function fbLogin() {
  onFbLogin();
}

// Google login

export function googleLogin() {
  GoogleLogIn();
}

export function login(data) {
  console.log('login data in actions ready to dispatch', data);
  return apiPost(LOGIN, data);
}

export function signup(data) {
  console.log('printtttt data', data);
  return apiPost(SIGNUP, data);
}

// export async function  logout(data) {
//   try {
//     if (!!data) {
//       const res = await apiGet(LOGOUT, data);
//       console.log("logout successful", res)
//        await clearUserData();
//       dispatch({type: types.CLEAR_REDUX_STATE});

//     }
//     return;
//   } catch (error) {
//     console.log(error)
//   }
// }

// another way of Logout

export function logout(data) {
  console.log('accessToken key in actions', data);

  return new Promise((resolve, reject) => {
    return apiGet(LOGOUT)
      .then(res => {
        console.log('Log out successful', res);
        if (res) {
          clearUserData();
          dispatch({
            type: types.CLEAR_REDUX_STATE,
            payload: {},
          });
          return;
        }
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export const isLogin = data => {
  console.log('dispatched login item>>>>', data);
  dispatch({
    type: types.IS_LOGIN,
    payload: data,
  });
};
