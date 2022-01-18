//import liraries
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ButtonCustom from '../../Components/ButtonCustom';
import TextInputCus from '../../Components/TextInputCus';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings';
import actions from '../../redux/actions';
import {showError} from '../../utils/helperFunction';
import validation from '../../utils/validation';
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

import {
  moderateScale,
  moderateScaleVertical,
} from '../../styles/responsiveSize';
import {GoogleLogIn} from './helperFunction';
import store from '../../redux/store';
import {setUserData} from '../../utils/utils';
import {useSelector} from 'react-redux';

const {dispatch} = store;

// create a component
const SignUpScreen = ({navigation}) => {
  const [isScreenLoading, setIsScreenLoading] = useState(false);
  if (isScreenLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  useEffect(() => {
    // GoogleSignin.configure({
    //   webClientId:
    //     '171222512122-t35kqp5og1r5av61evan7rc9g1so0gv3.apps.googleusercontent.com',
    //   offlineAccess: true,
    //   forceCodeForRefreshToken: true,
    //   scopes: ['profile', 'email'],
    // });

    GoogleSignin.configure();
    const deviceName = Platform.OS;
    updateState({device_type: deviceName});
    console.log('device name  ========>>>>>>', device_type);
    console.log(
      'print static data',
      device_token,
      country_code,
      social_id,
      social_type,
    );
  }, []);

  const [state, setState] = useState({
    isLoading: false,
    name: '',
    email: '',
    password: '',
    isSecure: true,
    phone: '',
    phone_code: '',
    country_code: '91',
    device_token: '123',
    device_type: '',
    social_id: 'facebook123',
    social_type: 'facebook',
  });

  const {
    isLoading,
    name,
    email,
    password,
    isSecure,
    phone,
    phone_code,
    country_code,
    device_token,
    device_type,
    social_id,
    social_type,
  } = state;
  const updateState = data => setState(() => ({...state, ...data}));

  const isValidData = () => {
    const error = validation({
      name,
      phone,
    });
    if (error) {
      showError(error);
      return false;
    }
    return true;
  };

  const onSignup = async () => {
    const checkValid = isValidData();
    updateState({isLoading: true});
    if (checkValid) {
      try {
        console.log(
          'before passing data lets check',
          social_id,
          social_type,
          name,
          phone,
          phone_code,
          country_code,
          device_token,
          device_type,
        );
        const res = await actions.signup({
          social_id,
          social_type,
          name,
          phone,
          phone_code,
          country_code,
          device_token,
          device_type,
        });
        console.log('register successful', res);
        const resData = await res.data;
        // console.log('data to store in asyncStorage', resData);
        //  setUserData(resData)
        navigation.navigate(navigationStrings.LOGIN_SCREEN);
      } catch (error) {
        console.log(error);
        showError(error.message);
      }
    }
    updateState({isLoading: false});
  };

  // const FbLogin = _responseInfoCallback => {
  //   LoginManager.logOut();
  //   return LoginManager.logInWithPermissions(['email', 'public_profile']).then(
  //     result => {
  //       console.log('fb response ', result);
  //       if (
  //         result.declinedPermissions &&
  //         result.declinedPermissions.includes('email')
  //       ) {
  //         requestIdleCallback({message: 'email is requires'});
  //       }
  //       if (result.isCancelled) {
  //         console.log('error');
  //       } else {
  //         const infoRequest = new GraphRequest(
  //           '/me?fields=email,name,picture',
  //           null,
  //           _responseInfoCallback,
  //         );
  //         new GraphRequestManager().addRequest(infoRequest).start();
  //       }
  //     },
  //     function (error) {
  //       console.log('login failed' + error);
  //     },
  //   );
  // };

  // const onFbLogin = async () => {
  //   try {
  //     await FbLogin(_responseInfoCallback);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const _responseInfoCallback = async (error, result) => {
  //   if (error) {
  //     console.log('error from handling response', error);
  //     return;
  //   } else {
  //     const userData = result;
  //     console.log('fb data', userData);
  //   }
  // };

  // const OnGoogleLogIn = async () => {
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     const userInfo = await GoogleSignin.signIn();
  //     console.log('google data', userInfo);

  //     const user = userInfo?.user;
  //     if (!!user?.id) {
  //       console.log('google user data ready to store  ', user);
  //       const userData = {
  //         access_token: user?.id,
  //         profile: user?.photo,
  //         name: user?.name,
  //         email: user?.email,
  //       };
  //       setUserData(userData).then(res => {
  //         dispatch({
  //           type: types.FB_LOGIN,
  //           payload: userData,
  //         });
  //       });
  //     }
  //   } catch (error) {
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       // user cancelled the login flow
  //       console.log('user Cancelled sign in process ', error);
  //     } else if (error.code === statusCodes.IN_PROGRESS) {
  //       // operation (e.g. sign in) is in progress already
  //       console.log('user sign in is in Process', error);
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       // play services not available or outdated
  //       console.log(error);
  //     } else {
  //       console.log('error while signing in ', error);
  //       // some other error happened
  //     }
  //   }
  // };

  const OnGoogleLogIn = () => {
    actions.googleLogin();
  };

  const UserFbLogin = () => {
    actions.fbLogin();
  };

  return (
    <WrapperContainer style={styles.container}>
      <View style={{flex: 1, justifyContent: 'space-between', marginTop: 50}}>
        {/* manual login  */}

        <View>
          <View style={{marginBottom: 10}}>
            <TextInputCus
              label="user Name"
              placeholder="enter your user Name"
              onChangeText={name => updateState({name: name})}
              value={name}
            />
          </View>
          <View style={{marginBottom: 10}}>
            <Text
              style={{color: 'black', marginBottom: -15, fontWeight: 'bold'}}>
              Phone Number
            </Text>
            <View style={{flexDirection: 'row', width: '100%'}}>
              <View style={{width: '20%'}}>
                <TextInputCus
                  textStyle={{paddingLeft: 5}}
                  // label="device Type"
                  placeholder="+91"
                  // isSecure={isSecure}
                  onChangeText={phoneCode =>
                    updateState({phone_code: phoneCode})
                  }
                  value={phone_code}
                  keyboardType="phone-pad"
                />
              </View>
              <View style={{width: '80%'}}>
                <TextInputCus
                  // label="Phone Number"
                  placeholder="enter your Phone Number"
                  onChangeText={phone => updateState({phone})}
                  value={phone}
                  keyboardType="phone-pad"
                />
              </View>
            </View>
          </View>

          {/* <View style={{marginBottom: 10}}>
            
          </View> */}
          <ButtonCustom
            onPress={onSignup}
            isLoading={isLoading}
            title="Sign up"
          />
          <View
            style={{
              marginTop: 30,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text> already Registered? </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(navigationStrings.LOGIN_SCREEN)
              }>
              <Text style={{fontWeight: '600'}}>Log In Here</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Social login  */}
        <View style={{marginBottom: moderateScaleVertical(30)}}>
          <View style={styles.socialLogin}>
            <ButtonCustom
              iconStyle={{tintColor: 'white'}}
              leftIcon={imagePath.ic_facebook}
              onPress={UserFbLogin}
              isLoading={isLoading}
              title="Log In with Facebook"
            />
            <ButtonCustom
              leftIcon={imagePath.ic_google}
              onPress={OnGoogleLogIn}
              isLoading={isLoading}
              title="Log In with google"
            />
          </View>
        </View>
      </View>
    </WrapperContainer>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#2c3e50',
  },
});

export default SignUpScreen;
