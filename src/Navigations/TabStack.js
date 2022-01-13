import React from 'react'
import { View, Text, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProfileScreen, HomeScreen, CartScreen } from '../Screens';
import navigationStrings from '../constants/navigationStrings';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import { moderateScale, textScale } from '../styles/responsiveSize';


const Tab = createBottomTabNavigator();

const TabStack = () => {
    
    return (
      <Tab.Navigator
        initialRouteName={navigationStrings.HOME_SCREEN}
        screenOptions={{
            headerShown: false,
            tabBarStyle:{
                height:60,
                paddingBottom:5,
                
            },
            tabBarLabelStyle:{
                fontSize:textScale(12),

            },
            tabBarLabelPosition:'below-icon',
            }}>
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => {
              if (focused) {
                return (
                  <Image
                    source={imagePath.ic_HOME}
                    style={{height: 32, width: 32, tintColor:colors.blue}}
                  />
                );
              } else {
                return (
                  <Image
                    source={imagePath.ic_HOME}
                    style={{height: 32, width: 32}}
                  />
                );
              }
            },
          }}
          name={navigationStrings.HOME_SCREEN}
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => {
              if (focused) {
                return (
                  <Image
                    source={imagePath.ic_PROFILE}
                    style={{height: 32, width: 32, tintColor:colors.blue}}
                  />
                );
              } else {
                return (
                  <Image
                    source={imagePath.ic_PROFILE}
                    style={{height: 32, width: 32}}
                  />
                );
              }
            },
          }}
          name={navigationStrings.PROFILE_SCREEN}
          component={ProfileScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => {
              if (focused) {
                return (
                  <Image
                    source={imagePath.ic_TAB_CART}
                    style={{height: 32, width: 32, 
                        tintColor:colors.blue
                    }}
                  />
                );
              } else {
                return (
                  <Image
                    source={imagePath.ic_TAB_CART}
                    style={{height: 32, width: 32}}
                  />
                );
              }
            },
          }}
          name={navigationStrings.CART_SCREEN}
          component={CartScreen}
        />
      </Tab.Navigator>
    );
}

export default TabStack
