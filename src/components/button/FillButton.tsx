import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props {
  title: string;
  backgroundColor: string;
  tintColor: string;
  onPress: () => void;
}

const FillButton = (props: Props) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: props.backgroundColor}]}
      onPress={props.onPress}>
      <Text style={[styles.title, {color: props.tintColor}]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height: 68,
    borderRadius: 10,
    marginBottom: 17,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default FillButton;
