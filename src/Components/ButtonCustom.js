import React from 'react'
import { View, TouchableOpacity, StyleSheet, Text, ActivityIndicator} from 'react-native'

const ButtonCustom = ({title, onPress, isLoading}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={styles.btnStyle}>
         { !!isLoading ? <ActivityIndicator/> :<Text style={styles.btnText}>{title} </Text>}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    btnStyle:{
        height:48,
        backgroundColor:'blue',
        marginTop:25,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
    },
    btnText: {
        fontSize:16,
        textTransform:'uppercase',
        fontWeight:'bold',
        color:'white'
    }
})

export default ButtonCustom;
