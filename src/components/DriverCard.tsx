import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Driver} from '../screens/DriverDashboardScreen';
import {COLORS} from '../constants/COLORS';

type Props = {
  driver: Driver;
};
const DriverCard = (props: Props) => {
  const driver = props.driver;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{driver.name}</Text>
      <View style={styles.secondContainer}>
        <View style={styles.imageContaiener}>
          <Image
            source={require('../assets/driver.png')}
            style={styles.imageStyle}
            resizeMode="contain"
          />
        </View>
        <View style={styles.rightContainer}>
          <Text>Age: {driver.age}</Text>
          <Text>Active Truck</Text>
        </View>
      </View>
    </View>
  );
};

export default DriverCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    marginVertical: 10,
    padding: 10,
    width: '100%',
    borderWidth: 2,
    borderColor: COLORS.black,
    alignSelf: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  secondContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    marginTop: 10,
  },
  imageContaiener: {
    marginLeft: 2,
    // width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: 120,
    height: 120,
  },
  rightContainer: {
    // flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    gap: 8,
  },
});
