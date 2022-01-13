import React, {useRef, useState, useEffect} from 'react';
import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import actions from '../redux/actions';
import colors from '../styles/colors';
// import strings from '../constants/lang';
// import colors from '../styles/colors';
// import fontFamily from '../styles/fontFamily';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../styles/responsiveSize';

const OtpInputComp = ({ isLoading ,onVerifyOtp, resendCode}) => {
  
  const [otp1, setOtp1] = useState(null);
  const [otp2, setOtp2] = useState(null);
  const [otp3, setOtp3] = useState(null);
  const [otp4, setOtp4] = useState(null);

  const [otp1Focus, setOtp1Focus] = useState(true);
  const [otp2Focus, setOtp2Focus] = useState(false);
  const [otp3Focus, setOtp3Focus] = useState(false);
  const [otp4Focus, setOtp4Focus] = useState(false);

  const otp1Ref = useRef(null);
  const otp2Ref = useRef(null);
  const otp3Ref = useRef(null);
  const otp4Ref = useRef(null);


 
  const verifyOtp = () => {
    // setIsLoading(isLoading);

    if (otp1 == '') {
      alert('Enter Code');
    } else if (otp2 == '') {
      alert('Enter Code');
    } else if (otp3 == '') {
      alert('Enter Code');
    } else if (otp4 == '') {
      alert('Enter Code');
    } else {
      let combineOtp = otp1 + '' + otp2 + '' + otp3 + '' + otp4;
      onVerifyOtp(combineOtp);
    }
  };
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: moderateScale(32),
        }}>
        <TextInput
          ref={otp1Ref}
          style={{
            ...styles.textInputStyle,
            borderWidth: otp1Focus ? 0.5 : 0,
          }}
          placeholder={'1'}
          autoFocus={true}
          value={otp1}
          keyboardType="numeric"
          returnKeyType={'done'}
          maxLength={1}
          onChangeText={val => {
            let otpText = val.replace(/[^0-9]/g, '');
            setOtp1(otpText);
            if (otpText != '') {
              setOtp1Focus(false);
              otp2Ref.current.focus();
            }
          }}
          onFocus={() => {
            setOtp1Focus(true);
            setOtp2Focus(false);
            setOtp3Focus(false);
            setOtp4Focus(false);
          }}
          onSubmitEditing={() => {
            setOtp1Focus(false);
            otp2Ref.current.focus();
          }}
        />
        <TextInput
          ref={otp2Ref}
          value={otp2}
          placeholder={'2'}
          style={{
            ...styles.textInputStyle,
            borderWidth: otp2Focus ? 0.5 : 0,
          }}
          keyboardType="numeric"
          returnKeyType={'done'}
          maxLength={1}
          onChangeText={val => {
            let otpText = val.replace(/[^0-9]/g, '');
            setOtp2(otpText);
            if (otpText != '') {
              setOtp2Focus(false);
              otp3Ref.current.focus();
            }
          }}
          onFocus={() => {
            setOtp1Focus(false);
            setOtp2Focus(true);
            setOtp3Focus(false);
            setOtp4Focus(false);
          }}
          onKeyPress={({nativeEvent}) => {
            if (nativeEvent.key === 'Backspace' && otp2 == '') {
              setOtp2Focus(false);
              otp1Ref.current.focus();
            }
          }}
          onSubmitEditing={() => {
            setOtp2Focus(false);
            otp3Ref.current.focus();
          }}
        />
        <TextInput
          ref={otp3Ref}
          placeholder={'3'}
          style={{
            ...styles.textInputStyle,
            borderWidth: otp3Focus ? 0.5 : 0,
          }}
          value={otp3}
          keyboardType="numeric"
          returnKeyType={'done'}
          maxLength={1}
          onChangeText={val => {
            let otpText = val.replace(/[^0-9]/g, '');
            setOtp3(otpText);
            if (otpText != '') {
              setOtp3Focus(false);
              otp4Ref.current.focus();
            }
          }}
          onFocus={() => {
            setOtp1Focus(false);
            setOtp2Focus(false);
            setOtp3Focus(true);
            setOtp4Focus(false);
          }}
          onKeyPress={({nativeEvent}) => {
            if (nativeEvent.key === 'Backspace' && otp3 == '') {
              setOtp3Focus(false);
              otp2Ref.current.focus();
            }
          }}
          onSubmitEditing={() => {
            setOtp3Focus(false);
            otp4Ref.current.focus();
          }}
        />
        <TextInput
          ref={otp4Ref}
          placeholder={'4'}
          style={{
            ...styles.textInputStyle,
            borderWidth: otp4Focus ? 0.5 : 0,
          }}
          value={otp4}
          keyboardType="numeric"
          returnKeyType={'done'}
          maxLength={1}
          onChangeText={val => {
            let otpText = val.replace(/[^0-9]/g, '');
            setOtp4(otpText);
            if (otpText != '') {
              setOtp4Focus(false);
              Keyboard.dismiss();
            }
          }}
          onFocus={() => {
            setOtp1Focus(false);
            setOtp2Focus(false);
            setOtp3Focus(false);
            setOtp4Focus(true);
          }}
          onKeyPress={({nativeEvent}) => {
            if (nativeEvent.key === 'Backspace' && otp4 == '') {
              setOtp4Focus(false);
              verifyOtp();
            }
          }}
        />
      </View>
      <TouchableOpacity onPress={verifyOtp} style={styles.btnWrapper}>
        {!!isLoading?<ActivityIndicator/>:<Text style={styles.btnTextStyle}>Submit</Text>}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textInputStyle: {
    backgroundColor: '#F6F8FB',
    height: moderateScale(56),
    width: moderateScale(56),
    fontSize: textScale(14),
    // fontFamily: font.regular,
    // color: colors.blackColor,
    borderRadius: moderateScale(8),
    paddingHorizontal: moderateScale(24),
  },
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
export default OtpInputComp;
