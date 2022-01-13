//import liraries
import React, { useEffect, useState } from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ButtonCustom from '../../Components/ButtonCustom';
import TextInputCus from '../../Components/TextInputCus';
import WrapperContainer from '../../Components/WrapperContainer';
import navigationStrings from '../../constants/navigationStrings';
import actions from '../../redux/actions';
import { showError } from '../../utils/helperFunction';
import validation from '../../utils/validation';



// create a component
const SignUpScreen = ({navigation}) => {

  useEffect(() => {
    const deviceName = Platform.OS
    updateState({device_type:deviceName})
    console.log('device name  ========>>>>>>', device_type);
    console.log("print static data",device_token, country_code, social_id,social_type)
  },[phone])

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

    const {isLoading, name, email, password, isSecure, phone, 
    phone_code,country_code, device_token, device_type, social_id, social_type,
    } = state;
    const updateState = data => setState(() => ({...state, ...data}));
    

    const isValidData = () => {
      const error = validation({
        name,
        phone,                       
        // password,
      });
      if (error) {
        showError(error);
        return false;
      }
      return true;
    };

    const onSignup = async () => {
      const checkValid = isValidData();
      updateState({isLoading:true})
      if (checkValid) {
        try {
          // if (phone_code == '+91') {
          //   setState({country_code:'91'})
          // }

          // updateState({device_type:Platform.OS})


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

    return (
      <WrapperContainer style={styles.container}>
        <View style={{flex: 1, marginTop: 50}}> 
          <View style={{marginBottom: 10}}>
            <TextInputCus
              label="user Name"
              placeholder="enter your user Name"
              onChangeText={name => updateState({name:name})}
              value={name}
            />
          </View>
          <View style={{marginBottom: 10}}>
            <Text style={{color:'black', marginBottom:-15, fontWeight:'bold'}}>Phone Number</Text>
            <View style={{flexDirection: 'row', width: '100%'}}>
              <View style={{width: '20%'}}>
                <TextInputCus
                  textStyle={{paddingLeft: 5}}
                  // label="device Type"
                  placeholder="+91"
                  // isSecure={isSecure}
                  onChangeText={phoneCode => updateState({phone_code:phoneCode})}
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
         <ButtonCustom onPress={onSignup} isLoading={isLoading} title="Sign up" />
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

//make this component available to the app
export default SignUpScreen;
