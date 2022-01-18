import React from 'react';
import {View, Text} from 'react-native';
import {
  LoginManager,
  GraphRequest,
  GraphRequestManager,
  LoginButton,
  AccessToken,
} from 'react-native-fbsdk';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import types from '../../redux/types';
import store from '../../redux/store';
import {setUserData} from '../../utils/utils';

const {dispatch} = store;

// Google Login  from here

const GoogleLogIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    console.log('google data', userInfo);

    const user = userInfo?.user;
    if (!!user?.id) {
      console.log('google user data ready to store  ', user);
      const userData = {
        access_token: user?.id,
        profile: user?.photo,
        name: user?.name,
        email: user?.email,
      };
      setUserData(userData).then(res => {
        dispatch({
          type: types.FB_LOGIN,
          payload: userData,
        });
      });
    }
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
      console.log('user Cancelled sign in process ', error);
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
      console.log('user sign in is in Process', error);
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
      console.log(error);
    } else {
      console.log('error while signing in ', error);
      // some other error happened
    }
  }
};

// fb Login
const FbLogin = _responseInfoCallback => {
  LoginManager.logOut();
  return LoginManager.logInWithPermissions(['email', 'public_profile']).then(
    result => {
      console.log('fb response ', result);
      if (
        result.declinedPermissions &&
        result.declinedPermissions.includes('email')
      ) {
        requestIdleCallback({message: 'email is requires'});
      }
      if (result.isCancelled) {
        console.log('error');
      } else {
        const infoRequest = new GraphRequest(
          '/me?fields=email,name,picture',
          null,
          _responseInfoCallback,
        );
        new GraphRequestManager().addRequest(infoRequest).start();
      }
    },
    function (error) {
      console.log('login failed' + error);
    },
  );
};

const onFbLogin = async () => {
  try {
    await FbLogin(_responseInfoCallback);
    // console.log('data at helper', data);
  } catch (error) {
    console.log(error);
  }
};

const _responseInfoCallback = async (error, result) => {
  if (error) {
    console.log('error from handling response', error);
    return;
  } else {
    const data = result;
    console.log('fb data', data);

    if (!!data?.id) {
      console.log('data id is here ', data);
      const userData = {
        access_token: data?.id,
        profile: data?.picture?.data?.url,
        name: data?.name,
        email: data?.email,
      };
      setUserData(userData).then(res => {
        dispatch({
          type: types.FB_LOGIN,
          payload: userData,
        });
      });
    }
    return data;
  }
};

export {onFbLogin, GoogleLogIn};
