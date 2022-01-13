import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import imagePath from '../constants/imagePath';
import fontFamily from '../styles/fontFamily';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../styles/responsiveSize';


const HeaderComp = ({title, titleStyle,iconStyle, navigation}) => {
    console.log(title, 'titleeeeeeeeeeeeeeeeeee')
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={{...iconStyle, ...styles.imgStyle}}
              source={imagePath.ic_ARROW_BACK}
            />
          </TouchableOpacity>
          <Text style={{...styles.textColor, ...titleStyle}}>{title}</Text>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
    imgStyle:{
      height: 35, 
      width: 35},
    textColor:{
      color: 'black',
      fontFamily: fontFamily.medium,
      fontSize: textScale(20),
      marginLeft: moderateScale(12),
    }
});

export default HeaderComp;
