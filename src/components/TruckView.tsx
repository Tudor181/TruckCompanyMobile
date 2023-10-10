import React, {useEffect} from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import {Truck} from '../screens/AllTrucksScreen';
import {COLORS} from '../constants/COLORS';
import {TruckImages, trucks} from '../constants/TruckImages';
import useFetch from '../hooks/useFetch';

type TruckProp = {
  truck: Truck;
  refetch: () => Promise<void>;
};
const TruckView = (props: TruckProp) => {
  const truck = props.truck;

  const {deleteRequest, isLoading, isError} = useFetch({
    endpoint: `v1.0/trucks/delete/${truck.id}`,
  });

  const handleDeleteTruck = async () => {
    const response = await deleteRequest();
    console.log(response);
    if (response === 'Truck Deleted') {
      Alert.alert('Succesfull deleted');
      props.refetch();
    }
  };

  useEffect(() => {
    console.log('iserror', isError);
    if (isError) {
      Alert.alert('There was an unexpected error');
    }
  }, [isError]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{truck.manufacturer}</Text>
      <View style={styles.secondContainer}>
        <View style={styles.imageContaiener}>
          <Image
            source={
              TruckImages[truck.imageId as trucks] ??
              require('../assets/bottomNav/truck.png')
            }
            style={styles.imageStyle}
            resizeMode="center"
          />
        </View>
        <View style={styles.rightContainer}>
          <Text>Register Nr.: {truck.nrOfRegistration}</Text>
          <Text>Manufacture Year: {truck.manufactureYear}</Text>
        </View>
      </View>
      <View style={styles.botttomContainer}>
        <TouchableOpacity
          onPress={() => {
            Alert.alert(
              'Confirmation',
              `Are you sure you want to delete ${truck.nrOfRegistration} ?`,
              [
                {
                  text: 'Cancel',
                },
                {
                  text: 'Confirm',
                  onPress: () => handleDeleteTruck(),
                },
              ],
            );
          }}>
          <Image
            style={styles.actionButtons}
            source={require('../assets/actionIcon/delete.png')}
          />
        </TouchableOpacity>
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
  botttomContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButtons: {
    width: 40,
    height: 40,
  },
});
