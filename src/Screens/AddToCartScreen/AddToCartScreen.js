// import { useNavigation } from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from 'react-native';
import {useSelector} from 'react-redux';
import Header from '../../Components/Header';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import actions from '../../redux/actions';
import fontFamily from '../../styles/fontFamily';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../styles/responsiveSize';
import styles from './styles';
import {showError} from '../../utils/helperFunction';

const AddToCartScreen = ({route, navigation}) => {

  useEffect(() => {
    saveIds();
  }, []);

  const {data} = route.params;
  const [itemQuantity, setItemQuantity] = useState('2');
  const [modal, setModal] = useState(false);
  const [itemsId, setItemsId] = useState([]);
  const [check, setCheck] = useState([1,2,3,4,5,6,7,8])


  const cartItems = useSelector(data => data.items.listData);

  const saveIds = () =>{
    cartItems.map((item)=>{
      console.log("mapped items", item)
      setItemsId(oldArray => [...oldArray, item.id]);
    })
  }

  // console.log('card data at add to card screennnnnnnnnnn', itemsId);

  // const addItemToCart = (item, i) => {
  //   console.log("item waanna go to cart", item)
  //   setModal(false);
  //   actions.addItem(item);
    
  // };

  const addItemToCart = async (item, i) => {
    try {
      // console.log('item wanna add to cart',item);
      // console.log('idsss array', itemsId);
      const checkItem = itemsId.includes(item.id);
      // console.log(checkItem, 'check');
     if (!!checkItem) {
       showError('item is already in the Cart');
       return;
     } else {
       setModal(false);
       actions.addItem(item);
     }
    } catch (error) {
      console.log(error)
      
    }
  }

  return (
    <WrapperContainer>
      <Header
        searchIcon={false}
        navigation={navigation}
        left={imagePath.ic_ARROW_BACK}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Image style={styles.itemImg} source={{uri: data.img}} />
        </View>
        <View style={{marginTop: moderateScaleVertical(16)}}>
          <Text style={styles.itemTitle}>{data.title}</Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>
            AED
            <Text style={styles.SellingPrice}> {data.SellingPrice}</Text>
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <TouchableOpacity>
              <Image
                style={{
                  height: moderateScaleVertical(25),
                  width: moderateScale(30),
                  marginRight: moderateScale(18),
                }}
                source={{uri: imagePath.ic_SHARE}}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={{
                  height: moderateScaleVertical(25),
                  width: moderateScale(30),
                }}
                source={{uri: imagePath.ic_heart}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.actualPrice}>
            AED<Text> {data.actualPrice}</Text>
          </Text>
          <Text style={styles.offerLabel}>{data.offerLabel}</Text>
        </View>
        <View style={{marginTop: moderateScale(12)}}>
          <Text style={styles.inStockTextStyle}>IN STOCK</Text>
        </View>
        <View style={styles.btnWrapper}>
          <TouchableOpacity activeOpacity={0.7} style={styles.qtyStyle}>
            <Text style={styles.qtyTextStyle}>QTY {itemQuantity}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {setModal(!modal), saveIds()}}   /* combined call back functions */ 
            activeOpacity={0.7}
            style={styles.btnStyle}>
            <Text style={styles.btnTextStyle}>ADD TO CART</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: moderateScaleVertical(10),
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: textScale(14),
              fontFamily: fontFamily.medium,
              marginBottom: 10,
            }}>
            Description
          </Text>
          <Text
            style={{fontSize: textScale(13), fontFamily: fontFamily.regular}}>
            {data.description}
          </Text>
        </View>

        <Modal
          transparent={true}
          visible={modal}
          onRequestClose={() => {
            setModal(!modal);
          }}>
          <View style={styles.modalOuterView}>
            <View style={styles.modalInnerView}>
              <Text style={styles.modalText}>
                Are You sure You want to Add this item Into Your Cart
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginBottom: moderateScale(20),
                }}>
                <TouchableOpacity
                  onPress={() => setModal(!modal)}
                  activeOpacity={0.7}
                  style={[styles.ModalBtn, {backgroundColor: 'red'}]}>
                  <Text style={styles.modalBtnText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    addItemToCart(data);
                  }} // combined two callback functions
                  activeOpacity={0.7}
                  style={[styles.ModalBtn, {backgroundColor: 'blue'}]}>
                  <Text style={styles.modalBtnText}>confirm</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </WrapperContainer>
  );
};

export default AddToCartScreen;
