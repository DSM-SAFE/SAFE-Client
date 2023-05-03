import React from 'react';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SCircleButton = (image: string) => {
  return (
    <TouchableOpacity style={styles.circle}>
      <FontAwesome name={image} color="#FFF" size={34} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  circle: {
    borderRadius: 45,
    backgroundColor: '#656565',
    width: 90,
    height: 90,
  },
});

export default SCircleButton;
