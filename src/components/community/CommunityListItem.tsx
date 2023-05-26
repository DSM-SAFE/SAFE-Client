import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props {
  title: string;
  onPress: () => void;
}

const CommunityListItem = ({title, onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 195,
    width: '94%',
    marginTop: 16,
    paddingTop: 12,
    paddingLeft: 12,
    marginHorizontal: '3%',
  },
  title: {
    textAlign: 'left',
    fontSize: 20,
  },
});

export default CommunityListItem;
