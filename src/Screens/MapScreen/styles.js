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
  // container: {
  //   flex: 1,
  // },
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  calloutView:{
    height:moderateScaleVertical(100),
    width:moderateScale(100),
    justifyContent:'center',
    alignItems:'center',
  }

});
