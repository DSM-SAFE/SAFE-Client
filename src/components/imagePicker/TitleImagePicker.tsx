import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

interface Props {
  uri: string;
  setUri: (uri: string) => void;
}
const TitleImagePicker = (props: Props) => {
  const pickImage = async () => {
    await launchImageLibrary({mediaType: 'photo'}, response => {
      if (response.assets) {
        const url = response.assets[0].uri;
        props.setUri(url!);
      }
    });
  };

  return (
    <TouchableOpacity style={styles.button} onPress={pickImage}>
      <Image style={styles.image} source={{uri: props.uri}} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: '50%',
    backgroundColor: 'white',
    marginBottom: 20,
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: '#B3B3B3',
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});

export default TitleImagePicker;
