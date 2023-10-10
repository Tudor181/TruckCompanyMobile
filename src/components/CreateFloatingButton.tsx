import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS} from '../constants/COLORS';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {TruckDashboardStack} from '../navigator/TabNavigator';

const CreateFloatingButton = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<TruckDashboardStack>>();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('CreateTruckScreen')}>
      <Image
        source={require('../assets/actionIcon/copy.png')}
        style={styles.image}
      />
      {/* <Text>Create</Text> */}
    </TouchableOpacity>
  );
};
export default CreateFloatingButton;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: COLORS.primary,
    zIndex: 2,
    bottom: 10,
    borderRadius: 100,
    right: 20,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 100,
  },
});
