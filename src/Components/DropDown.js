//import liraries
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import imagePath from '../constants/imagePath';
import {moderateScale, moderateScaleVertical} from '../styles/responsiveSize';

// create a component
const DropDown = ({
  cartAllItems,
  ParticularItem,
  data = [],
  value = {},
  onSelect = () => {},
  dropDownStyling = {},
}) => {
  const [showOption, setShowOption] = useState(false);
  const [showNumber, setShowNumber] = useState('');
  console.log('selected value', value);

  const onSelectedItem = val => {
    setShowOption(false);
    onSelect(val);
  };

  const ItemNo = () => {
    cartAllItems.map(data => {
      // console.log('>>>>>>>>>>>>>>>>>>>?????????????????????');
      // console.log('cart all items id', data.id);
      // console.log('particular item id', ParticularItem?.id);
      // console.log('value to show', value.item);
      if (true) {
        setShowNumber(value.item);
        console.log('inner');
        // return value.item;
      } else {
        // return `select`;
        setShowOption('select');
      }
    });
    console.log('number to showwwwwwwwwwwwwww ', showNumber);
    return showNumber;
  };

  //  {!!value ? value.item : `select `}

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setShowOption(!showOption)}
        style={{...dropDownStyling, ...styles.DopDownStyles}}
        activeOpacity={0.7}>
        <Text>{!!value ? value.item : `select `} </Text>
        {/* {true ? (
          <Text>{!!value ? value.item : `select `} </Text>
        ) : (
          <Text>select</Text>
        )} */}
        <Image
          style={[
            styles.iconStyle,
            {transform: [{rotate: showOption ? '180deg' : '0deg'}]},
          ]}
          source={imagePath.Ic_drop_down}
        />
      </TouchableOpacity>
      {showOption && (
        <View style={styles.DropDownWrapper}>
          <ScrollView>
            {data.map((val, i) => {
              return (
                <TouchableOpacity
                  style={{
                    ...styles.selectedItemStyle,
                    backgroundColor: value?.id == val?.id ? 'pink' : 'white',
                  }}
                  onPress={() => onSelectedItem(val)}
                  key={val.id}>
                  <Text>{val.item}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  DopDownStyles: {
    marginBottom: 2,
    backgroundColor: 'rgba(0,0,0,0.2)',
    padding: 8,
    borderRadius: 6,
    maxHeight: 42,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectedItemStyle: {
    paddingVertical: 8,
    paddingHorizontal: 6,
    borderRadius: 4,
    marginBottom: 4,
  },
  iconStyle: {
    height: moderateScaleVertical(24),
    width: moderateScale(24),
  },
  DropDownWrapper: {
    backgroundColor: 'orange',
    padding: 8,
    borderRadius: 6,
    maxHeight: 150,
  },
});

//make this component available to the app
export default DropDown;
