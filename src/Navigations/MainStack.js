import React from 'react'
import { View, Text } from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import navigationStrings from '../constants/navigationStrings';
import { AddToCartScreen, CartScreen, ComingSoonScreen, HomeScreen, MapScreen } from '../Screens';
import TabStack from './TabStack';


const Stack = createNativeStackNavigator()

const MainStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}} >
            <Stack.Screen name={navigationStrings.TAB_STACK} component={TabStack} />
            <Stack.Screen name={navigationStrings.CART_SCREEN} component={CartScreen}/>
            <Stack.Screen name={navigationStrings.COMING_SOON_SCREEN} component={ComingSoonScreen}/>
            <Stack.Screen name={navigationStrings.ADD_To_CART} component={AddToCartScreen}/>
            <Stack.Screen name={navigationStrings.MAP_SCREEN} component={MapScreen}/>
        </Stack.Navigator>
    )
}

export default MainStack;
