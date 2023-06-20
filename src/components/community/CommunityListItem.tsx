import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props {
  image: string;
  title: string;
  content: string;
  onPress: () => void;
}

const CommunityListItem = (props: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Image style={styles.image} source={{uri: props.image}} />
      <View>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.content}>{props.content}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 130,
    marginTop: 16,
    paddingTop: 12,
    flexDirection: 'row',
  },
  title: {
    textAlign: 'left',
    fontSize: 18,
    marginTop: 5,
    marginLeft: 10,
  },
  content: {
    width: '53%',
    textAlign: 'left',
    fontSize: 15,
    marginLeft: 10,
    marginTop: 10,
  },
  image: {
    width: 105,
    height: 105,
    marginLeft: 12,
  },
});

export default CommunityListItem;
