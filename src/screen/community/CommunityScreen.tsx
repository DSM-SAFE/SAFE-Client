import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {CommunityListItem} from '../../components/community';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {RootScreens, RootStackList} from '../../navigator';
import {StackNavigationProp} from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {getCommunity} from '../../localDB/service/CommunityService';
import {CommunityModel} from '../../localDB/Model/CommunityModel';

interface Props {
  navigation: StackNavigationProp<RootStackList, RootScreens.Community>;
}

const CommunityScreen = ({navigation}: Props) => {
  const [community, setCommunity] = useState<CommunityModel[]>([]);
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate(RootScreens.AddCommunity)}>
          <FontAwesome style={styles.headerRight} name="pencil" size={20} />
        </TouchableOpacity>
      ),
    });
  });

  useEffect(() => {
    const asyncCommunity = async () => {
      let list = await getCommunity();
      console.log(`community ${list}`);
      setCommunity(list);
    };
    asyncCommunity();
  }, []);

  return (
    <ScrollView style={styles.scrollView}>
      {community.map((item: CommunityModel) => {
        return (
          <CommunityListItem
            image={item.imageUri}
            title={item.title}
            content={item.content}
            onPress={() =>
              navigation.navigate(RootScreens.DetailCommunity, {
                title: item.title,
                image: item.imageUri,
                content: item.content,
              })
            }
          />
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: 16,
  },
  headerRight: {
    paddingRight: 20,
  },
});

export default CommunityScreen;
