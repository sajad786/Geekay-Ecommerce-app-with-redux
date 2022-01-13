
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
  itemImg: {
    height: moderateScale(375),
    width: moderateScale(323),
  },
  itemTitle: {
    fontSize: textScale(18),
    fontFamily: fontFamily.regular,
    color: colors.black,
  },
  SellingPrice: {
    fontFamily: fontFamily.bold,
    color: colors.black,
    fontSize: textScale(18),
  },
  actualPrice: {
    textDecorationLine: 'line-through',
    fontFamily: fontFamily.regular,
    color: colors.greyText,
    fontSize: textScale(14),
    marginRight: moderateScale(6),
  },
  offerLabel: {
    backgroundColor: colors.yellow,
    fontSize: textScale(12),
    fontFamily: fontFamily.BarlowSemiBold,
    color: colors.black,
    paddingVertical: moderateScale(1),
    paddingHorizontal: moderateScale(2),
  },
  inStockTextStyle: {
    color: colors.green,
    fontSize: textScale(14),
    fontFamily: fontFamily.BarlowSemiBold,
  },
  btnWrapper: {
    marginTop: moderateScaleVertical(12),
    height: 48,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  btnStyle: {
    width: '75%',
    height: '100%',
    backgroundColor: colors.btnbgcBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTextStyle: {
    color: colors.white,
    fontFamily: fontFamily.medium,
    fontSize: textScale(14),
  },
  qtyStyle: {
    width: '25%',
    height: '100%',
    backgroundColor: colors.btnbgcGRey,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qtyTextStyle: {
    fontFamily: fontFamily.regular,
    fontSize: textScale(14),
    color: colors.greyTextTwo,
  },
  modalInnerView: {
    justifyContent:'space-between',
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
  ModalBtn:{
    justifyContent:'center',
    height:moderateScaleVertical(42),
    paddingHorizontal:moderateScale(25),
  },
  modalBtnText:{
    color:colors.white,
    fontFamily:fontFamily.medium,
    fontSize:textScale(14),

  }
});
