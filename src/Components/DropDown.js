//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const data = [{id:1, item:1},{id:2, item:2},{id:3, item:3},{id:4, item:4}, {id:5, item:5}]

// create a component
const DropDown = () => {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.DopDownStyles} activeOpacity={0.7}>
          <Text>1</Text>
        </TouchableOpacity>
        {/* {data.map((val, i)=>{
               return <Text key={val.id} >{val.item}</Text>
            })} */}
      </View>
    );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  DopDownStyles:{
      // backgroundColor:'rgba(0,0,0,0.2)',
    //   padding:8,
    //   borderRadius:6,
    //   minHeight:42,
    //   justifyContent:'center',
 }
});

//make this component available to the app
export default DropDown;
