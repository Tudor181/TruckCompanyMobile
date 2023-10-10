import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../constants/COLORS';
import useFetch from '../hooks/useFetch';
import DriverCard from '../components/DriverCard';

export type Driver = {
  id: string;
  name: string;
  age: number;
};

const DriverDashboardScreen = () => {
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const {get, isLoading, isError} = useFetch({
    endpoint: 'v1.0/drivers/GetAllDrivers',
  });

  const renderDriver = ({item}: {item: Driver}) => {
    return <DriverCard driver={item} />;
  };
  const getAllDrivers = async () => {
    const response = await get();
    if (response) {
      setDrivers(response);
    }
  };
  useEffect(() => {
    getAllDrivers();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{textAlign: 'center'}}>Driver page</Text>
      <View style={styles.listView}>
        <FlatList
          data={drivers}
          renderItem={renderDriver}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
        />
      </View>
    </SafeAreaView>
  );
};

export default DriverDashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  listView: {
    flex: 1,
    // backgroundColor: 'red',
  },
  content: {
    flex: 1,
    padding: 15,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
