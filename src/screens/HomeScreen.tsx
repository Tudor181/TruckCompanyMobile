import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {TruckDashboardStack} from '../navigator/TabNavigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {COLORS} from '../constants/COLORS';

type Props = NativeStackNavigationProp<TruckDashboardStack>;

const HomeScreen = () => {
  const navigation = useNavigation<Props>();
  return (
    <SafeAreaView style={styles.simpleFlexContainer}>
      <View style={styles.container}>
        <Text>Welcome to the home page</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('AllTrucks')}
          style={styles.buttonStyle}>
          <Text>Go to all trucks</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  simpleFlexContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 12,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    gap: 20,
  },
  buttonStyle: {
    width: '30%',
    height: '10%',
    padding: 5,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
});
