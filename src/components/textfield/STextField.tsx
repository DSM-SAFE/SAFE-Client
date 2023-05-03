import React from 'react';
import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

interface Props {
  title: string;
  text: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}

const STextField = (props: Props) => {
  return (
    <View style={[styles.view, props.style]}>
      <Text style={styles.title}>{props.title}</Text>
      <TextInput
        editable={!props.disabled ?? true}
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
    width: '100%',
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
    marginBottom: 12,
    width: '100%',
  },
});

export default STextField;
