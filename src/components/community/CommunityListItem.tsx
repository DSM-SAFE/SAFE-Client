import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CommunityListItem = (title: string) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>;
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 195,
    width: '100%',
  },
  title: {
    textAlign: 'left',
    fontSize: 20,
  },
});

export default CommunityListItem;
