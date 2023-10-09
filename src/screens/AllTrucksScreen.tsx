import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../constants/COLORS';
import useFetch from '../hooks/useFetch';
import TruckView from '../components/TruckView';
export type Truck = {
  id: 'string';
  imdbId: 'string';
  title: 'string';
  releaseDate: 'string';
  trailerLink: 'string';
  poster: 'string';
  backdrops: ['string'];
  manufacturer: 'string';
  driverIds: [
    {
      id: 'string';
      name: 'string';
      age: 0;
    },
  ];
};
const AllTrucksScreen = () => {
  const [allTrucks, setAllTrucks] = useState<Truck[]>();
  const {get, isLoading, isError} = useFetch({endpoint: 'v1.0/trucks'});

  const getAllTrucks = async () => {
    const trucks = await get();
    if (trucks) {
      setAllTrucks(trucks);
    }
  };

  useEffect(() => {
    getAllTrucks();
  }, []);

  const renderTruck = ({item}: {item: Truck}) => {
    return <TruckView truck={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listView}>
        <FlatList
          data={allTrucks}
          renderItem={renderTruck}
          showsVerticalScrollIndicator={false}
        />
      </View>
      {/* <Text>{allTrucks && allTrucks[0].manufacturer}</Text> */}
    </SafeAreaView>
  );
};

export default AllTrucksScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  listView: {
    flex: 1,
  },
});
