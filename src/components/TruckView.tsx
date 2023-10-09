import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Truck} from '../screens/AllTrucksScreen';
import {COLORS} from '../constants/COLORS';

type TruckProp = {
  truck: Truck;
};
const TruckView = (props: TruckProp) => {
  const truck = props.truck;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{truck.manufacturer}</Text>
      <View style={styles.secondContainer}>
        <View style={styles.imageContaiener}>
          <Image
            source={require('../assets/trucks/Scania.jpeg')}
            style={styles.imageStyle}
            resizeMode="center"
          />
        </View>
        <View style={styles.rightContainer}>
          <Text>
            Register Nr.:
            {truck.title}
          </Text>
          <Text>Manufacturing Date: {truck.releaseDate}</Text>
        </View>
      </View>
    </View>
  );
};

export default TruckView;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    padding: 10,
    width: '90%',
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
    marginTop: 10,
  },
  imageContaiener: {
    marginLeft: 2,
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: 120,
    height: 120,
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
  },
});
