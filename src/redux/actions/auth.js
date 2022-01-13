import {LOGIN, SIGNUP, SEND_OTP, VERIFY_OTP, FORGOT_PASSWORD, CHANGE_PASSWORD, LOGOUT} from '../../config/urls';
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

// export function login(data) {

//   console.log("login data", data)
  
//   return new Promise((resolve, reject) => {
//     return apiPost(LOGIN, data)
//       .then(res => {
//         if (res.data.id) {
//           setUserData(res.data).then(() => {
//             resolve(res);
//             saveUserData(res.data);
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


export function otpVerify(data) {
  console.log('verify otp data  in actions', data);

  return new Promise((resolve, reject) => {
    return apiPost(VERIFY_OTP, data)
      .then(res => {
        console.log("Log in successful",res)
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



export function login(data) {
  console.log('login data in actions ready to dispatch', data);
  return apiPost(LOGIN, data);
}
 

export function signup(data) {
  console.log("printtttt data", data)
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




export const isLogin = (data) => {
  console.log('dispatched login item>>>>', data);
  dispatch({
    type: types.IS_LOGIN,
    payload: data,
  });
};
