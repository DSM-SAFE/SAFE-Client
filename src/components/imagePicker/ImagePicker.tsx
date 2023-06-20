import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

interface Props {
  uri: string;
  setUri: (uri: string) => void;
}
const ImagePicker = (props: Props) => {
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
    alignSelf: 'center',
  },
  image: {
    backgroundColor: 'gray',
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 34,
  },
});

export default ImagePicker;
