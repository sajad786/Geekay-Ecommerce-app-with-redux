import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ButtonCustom from '../../Components/ButtonCustom'
// import CountryCodePicker from '../../Components/CountryCodePicker'
import TextInputCus from '../../Components/TextInputCus'
import navigationStrings from '../../constants/navigationStrings'
import actions from '../../redux/actions'
import { showError } from '../../utils/helperFunction'
import { clearAsyncStorate, getUserData } from '../../utils/utils'
import validation from '../../utils/validation'
// import {CountryPicker} from 'react-native-country-codes-picker/components/CountryPicker';



const LoginScreen = ({navigation}) => {


   const [show, setShow] = useState(false);
   const [countryCode, setCountryCode] = useState('');


  //  const getDataFromAsyncStorage = async () => {
  //    const  userData = await getUserData()
  //   console.log('userdata in LoginScreen', userData);
  //   updateState({device_token:userData.device_token,device_type:userData.device_type, })
  //  }

  useEffect(() => {
    const deviceName = Platform.OS;
    updateState({device_type: deviceName});
    console.log('device name  ========>>>>>>', device_type);
    console.log('print static data',device_token);
  }, [phone]);

  const [state, setState] = useState({
    isLoading: false,
    isSecure: true,
    phone: '',
    phone_code:'',
    device_token:'xyz',
    device_type:'',
  });

  const {isLoading, isSecure, phone, device_token, device_type, phone_code} = state;
  const updateState = data => setState(() => ({...state, ...data}));

  const isValidData = () => {
    const error = validation({
      phone,
    });
    if (error) {
      showError(error);
      return false;
    }
    return true;
  };

  
  // function preg_match(regex, str) {
  //   return new RegExp(regex).test(str);
  // }
  // // const onLogin = () => {
  // //   preg_match()
  // // };


  const onLogin = async () => {
    updateState({isLoading: true})
    const checkValid = isValidData()
    if (checkValid) {
      try {
        console.log("data to proceed for logIn",phone, phone_code,device_token, device_type)
        const res = await actions.login({
          phone,
          phone_code,
          device_token,
          device_type,
        });
        console.log('otp sent successfully', res);
        const userData = res.data
        navigation.navigate(navigationStrings.VERIFYOTP_SCREEN,{userData});
        // actions.isLogin(true);
      } catch (error) {
        console.log(error);
        showError(error.message);
      }
    }
     updateState({isLoading: false});
  }

  return (
    <View style={styles.container}>
      <View style={{marginTop: 40}}>
        <Text style={{color:'black', marginBottom:-10, fontWeight:'bold'}}>Phone Number</Text>
        <View style={{flexDirection: 'row', width: '100%'}}>
          <View style={{width: '20%'}}>
            <TextInputCus
              textStyle={{paddingLeft: 5}}
              // label="device Type"
              placeholder="+91"
              // isSecure={isSecure}
              onChangeText={phoneCode => updateState({phone_code: phoneCode})}
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

        <ButtonCustom onPress={onLogin} isLoading={isLoading} title="Login" />
        <View
          style={{
            marginTop: 30,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Text>Not yet Registered? </Text>
          <TouchableOpacity onPress={() => navigation.push('signup')}>
            <Text style={{fontWeight: '600'}}>SignUp Here</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'white'
  }
})

export default LoginScreen

