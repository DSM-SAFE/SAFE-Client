import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {RootScreens, RootStackList} from '../../navigator';
import {RouteProp} from '@react-navigation/native';

export type DetailCommunityParam = {
  title: string;
  image: string;
  content: string;
};

interface Props {
  navigation: StackNavigationProp<RootStackList, RootScreens.DetailCommunity>;
  route: RouteProp<RootStackList, RootScreens.DetailCommunity>;
}

const DetailCommunityScreen = ({route}: Props) => {
  const {title, image, content} = route.params;
  return (
    <View style={styles.safeArea}>
      <Text style={styles.title}>{`제목 : ${title}`}</Text>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
      <Text style={styles.textView}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  view: {
    flexDirection: 'row',
  },
  image: {
    width: '100%',
    height: '40%',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  textView: {
    padding: 10,
    height: 250,
    backgroundColor: '#FFF',
    borderColor: '#B3B3B3',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 10,
    fontSize: 15,
  },
});

export default DetailCommunityScreen;
