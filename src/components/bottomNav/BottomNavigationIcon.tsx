import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {COLORS} from '../../constants/COLORS';

type Props = {
  source: any;
  focus: boolean;
};

const BottomNavigationIcon = (props: Props) => {
  const image = props.source;
  const isFocused = props.focus;

  return (
    <Image
      source={image}
      style={{
        ...styles.icon,
        ...{tintColor: isFocused ? COLORS.primary : COLORS.black},
      }}
    />
  );
};
const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
});

export default BottomNavigationIcon;
