import { NavigationContainer, useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { PRODUCT_DATA } from '../data/data'
import actions from '../redux/actions'
import colors from '../styles/colors'
import fontFamily from '../styles/fontFamily'
import { moderateScale, moderateScaleVertical, textScale } from '../styles/responsiveSize'
import navigationStrings from '../constants/navigationStrings'



const ProductComponent = ({columns, horizontal}) => {

  const navigation = useNavigation()

   const addItemToCart = (item, i) => {
    //  console.log(item, 'itemsssssss to add')
     actions.addItem(item)
   };

   const onDetailScreen = (item) => {
     navigation.navigate(navigationStrings.ADD_To_CART,{data: item})
   }
    const productData = ({item, index}) => {
    
      return (
        <View key={item.id} style={styles.wrapper}>
          <TouchableOpacity
          onPress={()=>onDetailScreen(item)}
            activeOpacity={0.7}
            style={styles.btnStyle}>
            <View style={{flex: 2}}>
              <Image
                style={{
                  ...StyleSheet.absoluteFillObject,
                  resizeMode: 'cover',
                }}
                source={{uri: item.img}}
              />
            </View>

            <View style={{flex: 2}}>
              <Text style={styles.productTitle}>{item.title}</Text>
              <Text>
                AED
                <Text style={styles.SellingPrice}> {item.SellingPrice}</Text>
              </Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.actualPrice}>
                  AED<Text> {item.actualPrice}</Text>
                </Text>
                <Text style={styles.offerLabel}>{item.offerLabel}</Text>
              </View>
              <Text style={styles.releasingDateStyle}>
                Releasing {item.ReleasingDate}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    };

    return (
      <View>
        <FlatList
          ListHeaderComponent={() => (
            <View style={{paddingLeft: moderateScale(10)}} />
          )}
          numColumns={columns?columns:null}
          horizontal={horizontal}
          data={PRODUCT_DATA}
          renderItem={productData}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={() => (
            <View style={{paddingLeft:!columns ? moderateScale(10): null,paddingBottom: columns? moderateScaleVertical(55):null}}>
             
              </View>
          )}
        />
      </View>
    );
}    

const styles = StyleSheet.create({
  productTitle: {
    color: colors.lightGrey,
    fontFamily: fontFamily.regular,
    fontSize: textScale(13),
  },
  btnStyle: {
    flex: 1, 
    padding: moderateScale(8), 
    backgroundColor: colors.white
  },
  wrapper: {
    height: moderateScaleVertical(292),
    width: moderateScale(150),
    marginRight: moderateScale(9),
  },
  SellingPrice: {
    fontFamily: fontFamily.bold,
    color: colors.black,
    fontSize: textScale(16),
  },
  actualPrice: {
    textDecorationLine: 'line-through',
    fontFamily: fontFamily.regular,
    color: colors.greyText,
    fontSize: textScale(12),
  },
  offerLabel: {
    backgroundColor: colors.yellow,
    fontSize: textScale(11),
    fontFamily: fontFamily.medium,
    color: colors.black,
    paddingVertical: moderateScale(1),
    paddingHorizontal: moderateScale(2),
  },
  releasingDateStyle: {
    fontSize: textScale(11),
    fontFamily: fontFamily.regular,
    color: colors.greyTextTwo,
  },
});
export default ProductComponent;
