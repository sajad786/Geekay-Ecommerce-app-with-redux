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
  subTotal: {
    fontFamily: fontFamily.medium,
    fontSize: textScale(16),
    color: colors.lightGrey,
  },
  dropdown: {
    // position: 'absolute',
    backgroundColor: '#fff',
    // top: 50,
  },
});
