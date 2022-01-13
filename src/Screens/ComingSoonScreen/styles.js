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
  filter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: moderateScaleVertical(12),
    borderTopWidth: moderateScale(0.3),
    borderTopColor: colors.greyText,
    paddingVertical: 5,
    borderBottomWidth: moderateScale(0.3),
  },
  filterItem: {
    //   borderRightColor:colors.greyText,
    //   borderRightWidth:moderateScale(0.3),
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
