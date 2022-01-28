import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Dimensions, FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'
import Carousal from '../../Components/Carousal'
import Category from '../../Components/Category'
import Header from '../../Components/Header'
import ProductComponent from '../../Components/ProductComponent'
import WrapperContainer from '../../Components/WrapperContainer'
import navigationStrings from '../../constants/navigationStrings'
import { UPPER_DATA } from '../../data/data'
import colors from '../../styles/colors'
import { moderateScale, moderateScaleVertical } from '../../styles/responsiveSize'
import styles from './styles'


const WIDTH = Dimensions.get('window').width
console.log(WIDTH,'Screen width')

const HomeScreen = () => {

  const navigation = useNavigation()
 
  const cartItemsLength = useSelector((data)=>(
    data.items.listData.length
  ))

  console.log('Home cart items ', cartItemsLength)

    const upperData = ({item, index}) => {
        return (
          <View key={item.id} style={{marginHorizontal: 5}}>
            <TouchableOpacity>
              <Image
                style={{
                  height: moderateScaleVertical(130),
                  width: moderateScale(200),
                  resizeMode: 'cover',
                }}
                source={{uri: item.img}}
              />
            </TouchableOpacity>
          </View>
        );
    }
    return (
      <ScrollView>
        <SafeAreaView style={{flex:1, backgroundColor:colors.blue, paddingBottom:-35}} >
        <WrapperContainer
          style={{backgroundColor: colors.homeBgc}}
          statusBarColor={colors.blue}>
          <Header navigation={navigation} cartItemsLength={cartItemsLength} />
          <View
            style={{
              marginHorizontal: moderateScale(-24),
              width: '100%',
              marginTop: -1,
            }}>
            <Carousal />  
          </View>
          <View
            style={{
              marginTop: moderateScaleVertical(31),
              marginHorizontal: moderateScale(-24),
            }}>
            <FlatList
              ListHeaderComponent={() => (
                <View style={{paddingLeft: moderateScale(10)}} />
              )}
              horizontal
              data={UPPER_DATA}
              renderItem={upperData}
              ListFooterComponent={() => (
                <View style={{paddingLeft: moderateScale(10)}} />
              )}
            />
          </View>
          <View style={styles.DrSection}>
            <Text style={styles.DrSectionHeading}>Coming Soon</Text>
            <Text onPress={()=>navigation.navigate(navigationStrings.COMING_SOON_SCREEN)} style={styles.DrSectionViewAll}>View ALL</Text>
          </View>
          <View style={{marginHorizontal: moderateScale(-24)}}>
            <ProductComponent
            horizontal={true}
            />
          </View>
          <View style={styles.categoryConatiner}>
            <Text style={styles.CategoryHeading}>Shop by category</Text>
            <Category />
          </View>
        </WrapperContainer>
        </SafeAreaView>
      </ScrollView>
    );
}



export default HomeScreen
