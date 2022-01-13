import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native';
import { CATEGORY_DATA } from '../data/data';
import colors from '../styles/colors';
import fontFamily from '../styles/fontFamily';
import { moderateScale, moderateScaleVertical, textScale, width } from '../styles/responsiveSize';

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height
const ScreenWIDTh = WIDTH-48
const ITEM_WIDTH = ScreenWIDTh / 3;


const Category = () => {

    const CategoryData = ({item, index}) => {
         return (
           <View
             key={item.id}
             style={styles.wrapper}>
             <TouchableOpacity
             activeOpacity={0.7}
               style={{
                 width: ITEM_WIDTH - 8,
                 backgroundColor:colors.white
               }}>
               <View>
                 <Image
                   style={styles.img}
                   source={{uri: item.img}}
                 />
               </View>
               <Text
                 style={styles.categoryCaption}>
                 {item.name}
               </Text>
             </TouchableOpacity>
           </View>
         );
    }

    return (
      <View style={styles.container}>
        <FlatList
          numColumns={3}
          data={CATEGORY_DATA}
          renderItem={CategoryData}
        />
      </View>
    );
};


const styles = StyleSheet.create({
  wrapper: {
    width: ITEM_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  img: {
    width: '100%',
    height: 130,
    // ...StyleSheet.absoluteFillObject,
    resizeMode: 'contain',
  },
  categoryCaption: {
    fontFamily: fontFamily.regular,
    fontSize: textScale(11),
    marginTop: 2,
    justifyContent: 'center',
    color: colors.lightGrey,
  },
});

export default Category;
