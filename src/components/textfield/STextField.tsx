import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

interface Props {
  title: string;
  text: string;
  placeholder: string;
  onChangeText: (text: string) => void;
}

const STextField = (props: Props) => {
  return (
    <View style={styles.view}>
      <Text style={styles.title}>{props.title}</Text>
      <TextInput
        style={styles.textfield}
        value={props.text}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 10,
    fontWeight: '500',
  },
  textfield: {
    backgroundColor: '#FFF',
    borderColor: '#B3B3B3',
    borderWidth: 3,
    borderStyle: 'solid',
    fontSize: 14,
    paddingVertical: 19,
    paddingLeft: 17,
    borderRadius: 10,
    width: '100%',
  },
});

export default STextField;
