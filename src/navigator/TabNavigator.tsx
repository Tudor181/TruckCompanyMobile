import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DriverDashboardScreen from '../screens/DriverDashboardScreen';
import {useColorScheme} from 'react-native';
import BottomNavigationIcon from '../components/bottomNav/BottomNavigationIcon';
import {COLORS} from '../constants/COLORS';
import AllTrucksScreen from '../screens/AllTrucksScreen';
import CreateTruckScreen from '../screens/CreateTruckScreen';

type TabStack = {
  TruckDashboard: undefined;
  DriverDashboard: undefined;
};

export type TruckDashboardStack = {
  HomeScreen: undefined;
  DriverDashboardScreen: undefined;
  AllTrucks: undefined;
  CreateTruckScreen: undefined;
};

const TabNav = createBottomTabNavigator<TabStack>();
const StackNav = createNativeStackNavigator<TruckDashboardStack>();

const TruckDashboard = () => {
  const color = useColorScheme() === 'dark' ? COLORS.black : COLORS.white;
  return (
    <StackNav.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: color},
      }}>
      <StackNav.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{title: 'Home'}}
      />
      <StackNav.Screen
        name="AllTrucks"
        component={AllTrucksScreen}
        options={{title: 'All Trucks'}}
      />
      <StackNav.Screen
        name="CreateTruckScreen"
        component={CreateTruckScreen}
        options={{title: 'Create Truck'}}
      />
    </StackNav.Navigator>
  );
};

const DriverDashboard = () => {
  return (
    <StackNav.Navigator screenOptions={{headerShown: false}}>
      <StackNav.Screen
        name="DriverDashboardScreen"
        component={DriverDashboardScreen}
        options={{}}
      />
    </StackNav.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <TabNav.Navigator
      initialRouteName="TruckDashboard"
      screenOptions={{headerShown: false}}>
      <TabNav.Screen
        name="TruckDashboard"
        component={TruckDashboard}
        options={{
          tabBarIcon: ({focused}) =>
            BottomNavigationIcon({
              source: require('../assets/bottomNav/truck.png'),
              focus: focused,
            }),
          title: 'Trucks',
        }}
      />
      <TabNav.Screen
        name="DriverDashboard"
        component={DriverDashboard}
        options={{
          tabBarIcon: ({focused}) =>
            BottomNavigationIcon({
              source: require('../assets/bottomNav/driver.png'),
              focus: focused,
            }),
          title: 'Drivers',
        }}
      />
    </TabNav.Navigator>
  );
};

export default TabNavigator;
