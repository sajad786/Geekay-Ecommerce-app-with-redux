import React, {useState} from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal } from 'react-native'
import imagePath from '../constants/imagePath'
import colors from '../styles/colors'
import fontFamily from '../styles/fontFamily'
import { moderateScale, moderateScaleVertical, textScale } from '../styles/responsiveSize'
import {useSelector} from 'react-redux';
import navigationStrings from '../constants/navigationStrings'
import { clearAsyncStorate } from '../utils/utils'
// import { logout } from '../redux/actions/auth'
import actions from '../redux/actions'

 

const Header = ({navigation, left, searchIcon=Boolean}) => {
  const accessToken = useSelector(data => data.auth.userData.access_token);


  const cartItems = useSelector(data => data.items.listData);
  console.log('cartItems in haaderrrrrrrrrrrrrrrrrrrrrrrrrrrr comp', cartItems)
  const cartItemsLength = cartItems.length
  console.log('no. of items to view', cartItemsLength);

 


  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        {!!left ? (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={{
                height: moderateScale(30),
                width: moderateScale(30),
                tintColor: colors.white,
                marginLeft: moderateScale(5),
              }}
              source={left}
            />
          </TouchableOpacity>
        ) : null}
        <TouchableOpacity>
          <Text
            style={{
              color: colors.white,
              fontFamily: fontFamily.bold,
              fontSize: textScale(18),
              marginLeft: moderateScale(15),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            Geekay
          </Text>
          {/* <Image style={{height:moderateScaleVertical(26), width: moderateScale(137), resizeMode:'cover'}} source={{uri:imagePath.appLogo}} /> */}
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        {!!searchIcon ? (
          <TouchableOpacity>
            <Image
              style={{
                height: moderateScaleVertical(25),
                width: moderateScale(25),
                resizeMode: 'cover',
                tintColor: colors.white,
              }}
              source={imagePath.ic_SEARCH}
            />
          </TouchableOpacity>
        ) : null}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(navigationStrings.CART_SCREEN);
          }}>
          <Image
            style={{
              height: moderateScaleVertical(25),
              width: moderateScale(25),
              resizeMode: 'cover',
            }}
            source={imagePath.ic_CART}
          />
          {cartItemsLength > 0 ? (
            <View
              style={{
                position: 'absolute',
                right: 10,
                top: -3,
                backgroundColor: 'red',
                borderRadius: 30,
                padding: 3,
              }}>
              <Text style={{color: 'white', fontSize: 10, fontWeight: 'bold'}}>
                {cartItemsLength}
              </Text>
            </View>
          ) : null}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginTop: moderateScaleVertical(-25),
    height: moderateScaleVertical(60),
    marginHorizontal: moderateScale(-24),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.blue,
  },

  // modal styling goes from here

  modalInnerView: {
    justifyContent: 'space-between',
    paddingVertical: moderateScale(15),
    paddingHorizontal: moderateScale(10),
    height: moderateScaleVertical(250),
    width: moderateScale(250),
    backgroundColor: 'white',
    // alignItems: 'center',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalOuterView: {
    flex: 1,
    backgroundColor: ' rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText: {
    fontFamily: fontFamily.bold,
    fontSize: textScale(16),
    alignSelf: 'center',
  },
  ModalBtn: {
    justifyContent: 'center',
    height: moderateScaleVertical(42),
    paddingHorizontal: moderateScale(25),
  },
  modalBtnText: {
    color: colors.white,
    fontFamily: fontFamily.medium,
    fontSize: textScale(14),
  },
});

export default Header
