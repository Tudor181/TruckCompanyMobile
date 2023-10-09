import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';

const RootNavigator = () => {
  const RootStack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen name="MainScreen" component={TabNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
