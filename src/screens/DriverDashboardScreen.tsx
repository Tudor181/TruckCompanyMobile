import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {COLORS} from '../constants/COLORS';

const DriverDashboardScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Driver page</Text>
    </SafeAreaView>
  );
};

export default DriverDashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
});
