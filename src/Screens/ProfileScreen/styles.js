import React from 'react';
import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../styles/responsiveSize';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.blue,
  },
  upperSection: {
    flex: 3,
    marginHorizontal: moderateScale(-24),
    marginTop: moderateScaleVertical(-25),
    backgroundColor: colors.blue,
  },

  OuterProfilePicView: {
    flex: 1,
    borderRadius: 15,
  },

  InnerProfilePicView: {
    justifyContent: 'center',
    paddingVertical: moderateScale(15),
    paddingHorizontal: moderateScale(10),
    height: moderateScaleVertical(200),
    width: moderateScale(310),
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,

    position: 'absolute',
    top: moderateScaleVertical(50),
    left: 0,
  },

  imageStyle: {
    height: moderateScaleVertical(80),
    width: moderateScale(80),
    borderRadius: moderateScale(40),
  },
  profileNameText: {
    color: colors.black,
    textAlign: 'center',
    marginTop: moderateScaleVertical(10),
    fontFamily: fontFamily.bold,
  },
  profileEmailText: {
    color: colors.black,
  },
  lowerSection: {
    marginTop: moderateScale(140),
  },
  lowerSectionItemWrapper: {
    flexDirection: 'row',
    marginBottom: moderateScaleVertical(20),
  },
  lowerSectionIconStyle: {
    height: moderateScaleVertical(25),
    width: moderateScale(25),
    marginRight: moderateScale(15),
  },
  lowerSectionTextStyle: {
    fontFamily: fontFamily.medium,
    fontSize: textScale(15),
    color: colors.black,
  },
  headerTitleStyle: {
    color: 'white',
  },
  headerIconStyle: {
    tintColor: 'white',
  },

  // modal styling goes from here

  modalInnerView: {
    justifyContent: 'space-between',
    paddingVertical: moderateScale(15),
    paddingHorizontal: moderateScale(10),
    height: moderateScaleVertical(200),
    width: moderateScale(310),
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
