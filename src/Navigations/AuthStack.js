import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import navigationStrings from '../constants/navigationStrings';
import { LoginScreen, SignUpScreen, VerifyOtp  } from '../Screens';


const Stack = createNativeStackNavigator()

const AuthStack = () => {
    return (
        <Stack.Navigator initialRouteName={navigationStrings.SIGNUP_SCREEN} screenOptions={{headerShown:false}} >
            <Stack.Screen name={navigationStrings.VERIFYOTP_SCREEN} component={VerifyOtp}/>
            <Stack.Screen name={navigationStrings.SIGNUP_SCREEN} component={SignUpScreen}/>
            <Stack.Screen name={navigationStrings.LOGIN_SCREEN} component={LoginScreen}/>
        </Stack.Navigator>
    )
}

export default AuthStack;
