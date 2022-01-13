// import React, {useState} from 'react'
// import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
// import CountryPicker from 'react-native-country-picker-modal'
// import colors from '../styles/colors'
// import { moderateScale, moderateScaleVertical, textScale } from '../styles/responsiveSize'
// // import TextField from './TextField'
// import TextInputCus from './TextInputCus'

// import WrapperContainer from './WrapperContainer'

// const CountryCodePicker = () => {

//     // const [countryCode, setCountryCode] = useState  ('+ 91')
//     // const [country, setCountry] = useState ('IN')
//     // const [withFlag, setWithFlag] = useState ('India')
//     // const [CountryCodeModal, setCountryCodeModal] = useState(false);
//     const [phoneNumber, setPhoneNumber] = useState('')


//     // other ways 
//     const [countryCode, setCountryCode] = useState('IN')
//     const [callingCode, setCallingCode] = useState("+91")
    
//     const onSelect = (country) => {
//         console.log(country)
//         const {callingCode, cca2, flag} = country;
//         setCountryCode("+" + callingCode)
//         setCountry(cca2)
//         setWithFlag(flag)
//     }

//     return (
//       <View>
//         <View style={styles.row}>
//           <View style={styles.countryCodeTextWrapper}>
//             <CountryPicker
//               withFilter
//               countryCode={countryCode}
//               withFlag
//               withAlphaFilter={false}
//               withCurrencyButton={false}
//               withCallingCode
//               onSelect={country => {
//                 console.log('country', country);
//                 console.log(country);
//                 const {cca2, callingCode} = country;
//                 setCountryCode(cca2);
//                 setCallingCode('+' + callingCode[0]);
//               }}
//               containerButtonStyle={{
//                 alignItems: 'center',
//                 marginLeft: 10,
//               }}
//             />

//             <Text style={styles.countryCodeText}> {countryCode} </Text>
//             <Text style={styles.countryCodeText}> {callingCode} </Text>
//           </View>

//           {/* <View style={styles.phoneNumberStyle}>
//             <TextInputCus
//               placeholder="Phone Number"
//               onChangeText={text => setPhoneNumber(text)}
//               value={phoneNumber}
//               TextFieldStyle={{
//                 alignItems: 'center',
//                 fontSize: textScale(15),
//                 paddingBottom: moderateScaleVertical(6),
//                 borderLeftColor: colors.blackOpacity30,
//                 borderLeftWidth: moderateScale(0.2),
//                 borderBottomWidth: moderateScale(0),
//                 paddingLeft: moderateScale(10),
//               }}
//               keyboardType="number-pad"
//             />
//           </View> */}
//         </View>
//         {/* <Text>{countryCode}</Text> */}
//       </View>
//     );

// }

// const styles = StyleSheet.create({
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     borderBottomWidth: moderateScale(0.2),
//     // borderBottomColor: colors.blackOpacity30,
//     paddingVertical: moderateScale(8),
//     width: '100%',
//   },
//   countryCodeTextWrapper: {
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     // width: '60%',
//     flexDirection: 'row',
//     // resizeMode:'contain'
//   },
//   phoneNumberStyle: {
//     // resizeMode:'contain',
//     width: '60%',
//     borderLeftWidth: moderateScale(0.2),
//     height:moderateScale(36)
//   },
//   countryCodeText: {
//       fontSize:moderateScale(15)
//   },
// });
// export default CountryCodePicker;
