import React, {useState} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import HeaderComp from '../../Components/HeaderComp';
import WrapperContainer from '../../Components/WrapperContainer';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../styles/responsiveSize';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import {useSelector} from 'react-redux';
import styles from './styles';
import DropDown from '../../Components/DropDown';
import actions from '../../redux/actions';


// const cartItemPrices = [];

const CartScreen = ({navigation}) => {
  const [itemPrice, setItemPrice] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [itemId, setItemId] = useState('');
  const cartItemPrices = [];

  const data = useSelector(data => data.items.listData);
  console.log('cartItems in cart component', data);

  // const saveItemNumber = item => {
  //   if (item.id === data.id) {
  //     const onSelect = item => {
  //       setSelectedItem(item);
  //     };
  //   }
  // };

  // const onSelect = item => {
  //   console.log('itemNumbers to save ', item);
  //   console.log('general Item id ', data.id);
  //   console.log('particular item id', itemId);

  //   if (data.id == itemId) {
  //     setSelectedItem(item);
  //   }
  //   return;
  // };

  const dropDownData = [
    {id: 1, item: 1},
    {id: 2, item: 2},
    {id: 3, item: 3},
    {id: 4, item: 4},
    {id: 5, item: 5},
  ];

  const onRemove = id => {
    actions.deleteItem(id);
  };

  const cartItems = ({item}) => {
    console.log('here is the dataaaaaaaaaaaaaaaaaaaaaaaaaaaaa', item.id);

    const onSelect = ItemNumber => {
      // console.log('itemNumbers to save ', ItemNumber);
      // console.log('general Item id ', data);
      // console.log('particular item id', item?.id);
      setSelectedItem(ItemNumber);

      // data.map(data => {
      //   console.log('===============>>>>>>>>>>>>>>>>>');
      //   console.log('general Item id ', data?.id);
      //   console.log('particular item id', item?.id);
      //   if (data?.id == item?.id) {
      //     setSelectedItem(ItemNumber);
      //   }
      //   return;
      // });
    };

    return (
      <View
        style={{
          // marginTop: 27,
          width: '100%',
          // backgroundColor: 'red',
          height: moderateScaleVertical(144),
          flexDirection: 'row',
          backgroundColor: colors.white,
          marginBottom: moderateScaleVertical(12),
        }}>
        <View
          style={{
            width: '30%',
            justifyContent: 'space-between',
            padding: moderateScale(12),
          }}>
          <View>
            <Image
              style={{
                height: moderateScaleVertical(65),
                width: moderateScale(69),
              }}
              source={{
                uri: item.img,
              }}
            />
          </View>

          <View>
            <DropDown
              ParticularItem={item}
              cartAllItems={data}
              onSelect={onSelect}
              data={dropDownData}
              value={selectedItem}
              dropDownStyling={{
                position: 'absolute',
                left: 0,
                bottom: -5,
                zIndex: 1,
                height: 100,
                padding: 0,
              }}
            />
          </View>

          {/* <TouchableOpacity
            activeOpacity={0.7}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              borderWidth: 0.3,
            }}>
            
            <Image
              style={{
                height: moderateScaleVertical(24),
                width: moderateScale(24),
                marginLeft: moderateScale(5),
              }}
              source={imagePath.Ic_drop_down}
            />
          </TouchableOpacity> */}
        </View>
        <View
          style={{
            width: '70%',
            justifyContent: 'space-between',
            paddingVertical: moderateScaleVertical(12),
          }}>
          <View style={{paddingHorizontal: moderateScale(5)}}>
            <Text
              style={{
                fontSize: textScale(13),
                fontFamily: fontFamily.medium,
                color: colors.greyText,
              }}>
              {item.title}
            </Text>
            <Text
              style={{
                fontSize: textScale(14),
                fontFamily: fontFamily.medium,
                color: colors.lightGrey,
              }}>
              <Text
                onPress={() => alert(item.SellingPrice)}
                style={{color: colors.greyText}}>
                AED
              </Text>{' '}
              {item.SellingPrice}
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  height: moderateScaleVertical(14),
                  width: moderateScale(14),
                  marginRight: moderateScale(2),
                }}
                source={{uri: imagePath.ic_heart}}
              />
              <Text>Move to wishList</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onRemove(item.id)}
              activeOpacity={0.7}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  height: moderateScaleVertical(14),
                  width: moderateScale(14),
                  marginRight: moderateScale(2),
                }}
                source={{uri: imagePath.ic_delete}}
              />
              <Text>Remove</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  const totalSum = () => {
    data.map((item, i) => {
      const price = item.SellingPrice;
      cartItemPrices.push(price);
    });

    console.log('total item price array', cartItemPrices);
    const total = cartItemPrices.reduce(
      (initialItemPrice, nextItemPrice) => initialItemPrice + nextItemPrice,
      0,
    );
    console.log('toatlllllllll', total);

    return (
      <View style={{marginBottom: moderateScaleVertical(20)}}>
        {/* <Text> AED {total.toFixed(2)}</Text> */}
        {!!cartItemPrices.length > 0 ? <Text style={styles.subTotal} >Subtotal ({cartItemPrices.length} items) AED {total.toFixed(2)}</Text> : <Text style={{color:colors.blue, fontSize:18, fontFamily:fontFamily.bold}} > Cart is Empty , let's Make it Fill ...! </Text>}
      </View>
    );
  };

  console.log('dataaaaa', data);
  return (
    <WrapperContainer style={{backgroundColor: colors.homeBgc}}>
      <HeaderComp navigation={navigation} title="Shopping Cart" />
      <View style={{marginTop: 27}}>
        <FlatList
          // ListHeaderComponent={() => (
          //   <View style={{paddingLeft: moderateScale(10)}} />
          // )}
          // numColumns={columns ? columns : null}
          data={data}
          renderItem={cartItems}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={totalSum}
          keyExtractor={item => item.id}
        />
      </View>
    </WrapperContainer>
  );
};

export default CartScreen;
