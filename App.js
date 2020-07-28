import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-native-tabs';
import SignUpLoginScreen from './screens/SignUpLoginScreen';
import HomeScreen from './screens/HomeScreen';
import ExchangeScreen from './screens/ExchangeScreen';
export default class App  extends React.Component() {
  render(){
  return (
    <AppContainer/>
  );
}
}

const TabNavigator = createBottomTabNavigator({
  SignUpLogin : {screens:SignUpLoginScreen},
  HomeScreen : {screens:HomeScreen},
  ExchangeScreen : {screens:ExchangeScreen}
});

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
