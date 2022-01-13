import React from 'react'
import { StyleSheet } from 'react-native'
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../styles/responsiveSize';

export default styles = StyleSheet.create({
  DrSection: {
    flexDirection: 'row',
    marginTop: moderateScaleVertical(20),
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(5),
  },
  DrSectionHeading: {
    fontFamily: fontFamily.medium,
    fontSize: textScale(18),
    color: colors.black,
  },
  DrSectionViewAll: {
    fontFamily: fontFamily.regular,
    fontSize: textScale(12),
    color: colors.blue,
  },
  CategoryHeading: {
    fontFamily: fontFamily.medium,
    fontSize: textScale(18),
    color: colors.black,
    marginBottom: moderateScaleVertical(8),
  },
  categoryConatiner: {
    marginHorizontal: moderateScale(-24),
    paddingHorizontal: moderateScale(24),
    marginTop: moderateScaleVertical(20),
  },
});