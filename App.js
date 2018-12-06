import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json

import Homepage from './src/screens/Homepage.js'
import Messages from './src/screens/Messages.js'

const AppNavigator = createStackNavigator({
  Homepage: {
    screen: Homepage,
  },
  Messages: {
    screen: Messages,
  },
}, {
    initialRouteName: 'Homepage',
    headerMode: "None"
});

export default createAppContainer(AppNavigator);
