import React, {useState} from 'react';
import {DimensionValue, StyleSheet, Text, TextInput, View} from 'react-native';
import {COLORS} from '../constants/COLORS';

type Props = {
  value?: string;
  placeholder?: string;
  onChange?: (text: string) => void;
  onPress?: () => void;
  autoComplete?: 'email' | 'username' | 'current-password';
  editable?: boolean;
  width?: DimensionValue;
  dropdown?: boolean;
  multiline?: boolean;
  isMandatory?: boolean;
  maxHeight?: DimensionValue;
};

const Input = (props: Props) => {
  const [isFocused, setIsFocused] = useState(false);

  const isEnabled = props.editable === undefined || props.dropdown === true;
  const borderColor =
    props.isMandatory && !props.value && !isFocused
      ? COLORS.error
      : isFocused
      ? COLORS.primary
      : COLORS.grayBorder;

  return (
    <View
      style={{
        ...styles.container,
        width: props.width ?? props.width,
        flex: props.width ? undefined : 1,
      }}>
      {props.value || isFocused ? (
        <Text
          style={{
            ...styles.text,
            backgroundColor: isEnabled ? COLORS.white : COLORS.whiteSmoke,
            color: isEnabled ? COLORS.primary : COLORS.graySecondary,
            // width: props.maxHeight ? '90%' : null,
          }}>
          {props.placeholder}
        </Text>
      ) : null}

      <TextInput
        // editable={props.editable}
        value={props.value}
        placeholder={isFocused ? '' : props.placeholder}
        placeholderTextColor={props.isMandatory ? COLORS.error : COLORS.black}
        style={[
          styles.input,
          {
            // backgroundColor: isEnabled ? undefined : COLORS.whiteSmoke,
            borderColor,
            // pointerEvents: props.editable === undefined ? 'auto' : 'none',
            // maxHeight: props.maxHeight,
          },
        ]}
        multiline={false}
        textAlignVertical="center"
        textAlign="center"
        onChangeText={props.onChange}
        onFocus={() => {
          setIsFocused(true);
          if (props.onPress) props.onPress();
        }}
        onEndEditing={() => {
          setIsFocused(false);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 100,
    flexDirection: 'column',
  },
  input: {
    flex: 1,
    maxHeight: 60,
    width: 200,
    borderWidth: 2,
    borderRadius: 8,
    padding: 20,
    paddingTop: 25,
    marginTop: 10,
    color: COLORS.black,
  },
  text: {
    fontSize: 16,
    marginHorizontal: 15,
    fontWeight: '500',
    position: 'absolute',
    zIndex: 1,
    left: 5,
    top: 12,
    color: COLORS.primary,
  },
});
export default Input;
