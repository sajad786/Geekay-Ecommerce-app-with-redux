import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const TextInputCus = ({
  placeholder,
  label,
  value,
  isSecure,
  onChangeText,
  keyboardType,
  textStyle,
  props,
}) => {
  return (
    <View style={styles.container}>
      <Text style={{marginBottom: 5, color: 'black'}}>{label}</Text>
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={isSecure}
        style={{
          ...styles.inputStyle,
          ...textStyle,
        }}
        placeholderTextColor="gray"
        keyboardType={!!keyboardType ? keyboardType : null}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    inputStyle:{
        height:42,
        borderWidth:1,
        borderColor:'gray',
    }, 

})
export default TextInputCus;
