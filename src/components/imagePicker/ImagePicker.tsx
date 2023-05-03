import React, {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

const SImagePicker = () => {
  const [uri, setUri] = useState<string>('');

  const pickImage = async () => {
    await launchImageLibrary({mediaType: 'photo'}, response => {
      if (response.assets) {
        const url = response.assets[0].uri;
        setUri(url!);
      }
    });
  };

  return (
    <TouchableOpacity onPress={pickImage}>
      <Image style={styles.image} source={{uri: uri}} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    backgroundColor: 'gray',
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

export default SImagePicker;
