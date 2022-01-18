import React from 'react'
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  ActivityIndicator,
  Image,
} from 'react-native';
import {moderateScale, moderateScaleVertical} from '../styles/responsiveSize';

const ButtonCustom = ({leftIcon, title, onPress, isLoading, iconStyle}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={!!isLoading ? styles.btnStyleWithoutIcon : null}>
        {!!isLoading ? (
          <ActivityIndicator />
        ) : (
          <View style={styles.btnStyleWithIcon}>
            {!!leftIcon ? (
              <Image
                source={leftIcon}
                style={{...iconStyle, ...styles.imageStyle}}
              />
            ) : null}
            <Text style={styles.btnText}>{title} </Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btnStyleWithIcon: {
    height: 48,
    backgroundColor: 'blue',
    marginTop: 25,
    justifyContent:'space-around' /*   {leftIcon ? "space-between":'center'},*/,
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
  },
  btnStyleWithoutIcon: {
    height: 48,
    backgroundColor: 'blue',
    marginTop: 25,
    justifyContent: 'center' /*   {leftIcon ? "space-between":'center'},*/,
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
  },
  btnText: {
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: 'white',
  },
  imageStyle: {
    height: moderateScaleVertical(25),
    width: moderateScale(25),
  },
});



// dynamic styling 
//  profilePic: (activeTab = ' ') => ({
//     borderWidth: activeTab === 'Profile' ? 2 : 0,
//     borderRadius: 50,
//     borderColor: '#fff',
//   }),



export default ButtonCustom;
