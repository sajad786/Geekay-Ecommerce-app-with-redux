
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import Routes from './src/Navigations/Routes';
import store from './src/redux/store';
import FlashMessage from 'react-native-flash-message';
import { getUserData } from './src/utils/utils';
import types from './src/redux/types';
import colors from './src/styles/colors';
import {
  notificationListener,
  requestUserPermission,
} from './src/utils/notificationService';

const {dispatch} = store;

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    requestUserPermission();
    notificationListener();
    init();
  }, []);

  const init = async () => {
    setIsLoading(true);
    const userData = await getUserData();
    console.log(
      userData,
      'userDataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa at app.js',
    );

    if (!!userData && !!userData?.access_token) {
      // console.log(userData.access_token, "access_token at app SCreeennn")
      dispatch({
        type: types.VERIFY_OTP,
        payload: userData,
      });
    }

    setIsLoading(false);
  };

  return (
    <Provider store={store}>
      {!!isLoading ? (
        <View
          style={[
            styles.container,
            {justifyContent: 'center', alignItems: 'center'},
          ]}>
          <ActivityIndicator size="large" color={colors.blue} />
        </View>
      ) : (
        <View style={styles.container}>
          <Routes />
          <FlashMessage position="top" />
        </View>
      )}
    </Provider>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
