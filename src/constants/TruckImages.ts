import {ImageSourcePropType} from 'react-native';

export enum trucks {
  scania = 'SCANIA',
  mercedes = 'MERCEDES',
  daf = 'DAF',
}

export const TruckImages: {[key in trucks]: ImageSourcePropType} = {
  [trucks.scania]: require('../assets/trucks/Scania.jpeg'),
  [trucks.mercedes]: require('../assets/trucks/Mercedes.jpg'),
  [trucks.daf]: require('../assets/trucks/Daf2.jpg'),
};
