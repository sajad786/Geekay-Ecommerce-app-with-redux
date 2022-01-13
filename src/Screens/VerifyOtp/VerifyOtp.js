import React, {Component, useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import OtpInputComp from '../../Components/OtpInputComp';
import WrapperContainer from '../../Components/WrapperContainer';
import actions from '../../redux/actions';
import colors from '../../styles/colors';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../styles/responsiveSize';

const VerifyOtp = ({navigation, route}) => {
  const {userData} = route?.params;
  const user_id = userData.user_id;

  const [isLoading, setIsLoading] = useState(false);

  const saveOtp = val => {
    setOtp(val);
  };

  // useEffect(() => {
  //   saveOtp();
  // }, [])

  const confirmOtp = async otp => {
    try {
      setIsLoading(true);
      if (!!otp) {
        // alert(res);
        // setOtp(res);
        console.log('before verify data is ', otp, user_id);

        actions.otpVerify({
          otp,
          user_id,
        });
        setIsLoading(false);
        return;
      }
    } catch (error) {
      console.log('error', error);
      setIsLoading(false);
    }
  };

  return (
    <WrapperContainer>
      <Text>VerifyOtp</Text>
      <OtpInputComp
        isLoading={isLoading}
        onVerifyOtp={val => {
          confirmOtp(val);
        }}
      />

      {/* <View style={{marginTop:10}} >
        <TouchableOpacity onPress={()=> alert(otp)} style={styles.btnWrapper}>
          <Text style={styles.btnTextStyle}>Submit</Text>
        </TouchableOpacity>
      </View> */}
    </WrapperContainer>
  );
};

const styles = StyleSheet.create({
  btnWrapper: {
    backgroundColor: colors.blue,
    width: '100%',
    height: moderateScaleVertical(42),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(20),
  },
  btnTextStyle: {
    color: colors.white,
    fontSize: textScale(16),
    fontWeigh: '600',
  },
});

export default VerifyOtp;
