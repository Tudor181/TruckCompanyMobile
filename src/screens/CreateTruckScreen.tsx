import React, {useState} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS} from '../constants/COLORS';
import Input from '../components/Input';
import useFetch from '../hooks/useFetch';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {TruckDashboardStack} from '../navigator/TabNavigator';

const CreateTruckScreen = () => {
  const [manufacturer, setManufacturer] = useState<string>();
  const [imageId, setImageId] = useState<string>();
  const [manufactureYear, setManufactureYear] = useState<string>();

  const nav = useNavigation<NativeStackNavigationProp<TruckDashboardStack>>();
  const {post} = useFetch({endpoint: 'v1.0/trucks/new/'});

  type obj = {
    imageId: string;
    manufacturer: string;
    manufactureYear: string;
  };

  const handleCreateTruck = async () => {
    const obj = {
      imageId: imageId,
      manufacturer: manufacturer,
      manufactureYear: parseInt(manufactureYear, 10),
    };
    console.log('ia', obj);
    const res = await post(obj);
    if (res) {
      Alert.alert('Truck created with success');
      nav.popToTop();
      nav.push('AllTrucks');
    }
  };

  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Input
          value={manufacturer}
          placeholder="Manufacturer"
          onChange={text => setManufacturer(text)}
        />
        <Input
          value={imageId}
          placeholder="Image ID"
          onChange={text => setImageId(text)}
        />
        <Input
          value={manufactureYear}
          placeholder="Manufacture Year"
          onChange={text => setManufactureYear(text)}
        />
        <TouchableOpacity
          onPress={() => handleCreateTruck()}
          style={styles.touchable}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateTruckScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  touchable: {
    width: 200,
    height: 50,
    backgroundColor: COLORS.primary,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
