import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import MakananScreen from './screens/MakananScreen';
import MinumanScreen from './screens/MinumanScreen';

const navigator = createStackNavigator({
  Makan: MakananScreen,
  Minum: MinumanScreen,
  Home: HomeScreen
},{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerTitle: 'Rumah Makan',
    headerStyle: {
      backgroundColor: '#09b'
    }
  } 
});

export default createAppContainer(navigator);
