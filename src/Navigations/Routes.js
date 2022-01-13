import React, {useState, useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import TabStack from './TabStack'
import MainStack from './MainStack';
import AuthStack from './AuthStack';
import { useSelector } from 'react-redux';
import { getItem, getUserData } from '../utils/utils';


const Routes = () => {



const userData = useSelector(state => state.auth.userData);
  console.log(userData, "userrrrrrrrDataaaa at routes ")

    return (
      <NavigationContainer>
        { !!userData && !!userData?.access_token ? <MainStack/> : <AuthStack/> }
      </NavigationContainer>
    );
}

export default Routes;
