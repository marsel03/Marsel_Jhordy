import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import MakananScreen from './screens/MakananScreen';
import MinumanScreen from './screens/MinumanScreen';
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import AboutScreen from './screens/AboutScreen';


const navigator = createStackNavigator({
  Makan: MakananScreen,
  Minum: MinumanScreen,
  Home: HomeScreen,
  Menu: MenuScreen,
  About: AboutScreen
},{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerTitle: 'Food Bisnis',
    headerStyle: {
      backgroundColor: '#808080'
    }
  } 
});

export default createAppContainer(navigator);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
