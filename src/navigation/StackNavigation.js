import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from '../screens/Main';
import QRcode from '../screens/QRcode';
import QRscanner from '../screens/QRscanner';
import Pdf from '../screens/Pdf';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="PDF" component={Pdf} />
        <Stack.Screen name="QRcode" component={QRcode} />
        <Stack.Screen name="QRscanner" component={QRscanner} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
