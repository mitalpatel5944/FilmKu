import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../Screen/LoginScreen';
import DownloadList from '../Screen/DownloadList';
import DownloadDetail from '../Screen/DownloadDetail';
import {Provider} from 'react-redux';
import Store from '../Redux/Store';

const AppStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();

export default function Navigation() {
  const App = () => (
    <AppStack.Navigator
      headerMode="none"
      initialRouteName="LoginScreen"
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        gestureDirection: 'horizontal',
      }}>
      <AppStack.Screen name="LoginScreen" component={LoginScreen} />
      <AppStack.Screen name="DownloadList" component={DownloadList} />
      <AppStack.Screen name="DownloadDetail" component={DownloadDetail} />
    </AppStack.Navigator>
  );

  return (
    <Provider store={Store}>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </Provider>
  );
}
