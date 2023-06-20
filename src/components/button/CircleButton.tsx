import React from 'react';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface Props {
  image: string;
  onPress: () => void;
}
const CircleButton = (props: Props) => {
  return (
    <TouchableOpacity style={styles.circle} onPress={props.onPress}>
      <FontAwesome name={props.image} color="#FFF" size={34} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  circle: {
    position: 'absolute',
    borderRadius: 45,
    backgroundColor: '#656565',
    width: 80,
    height: 80,
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CircleButton;
