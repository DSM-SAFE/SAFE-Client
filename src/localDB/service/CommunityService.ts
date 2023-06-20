import {AsyncStorage} from 'react-native';
import {CommunityModel} from '../Model/CommunityModel';

export const setCommunity = async (props: CommunityModel) => {
  let community = JSON.parse(
    (await AsyncStorage.getItem('community')) ?? '[]',
  ) as CommunityModel[];
  AsyncStorage.setItem('community', JSON.stringify([...community, props]));
};

export const getCommunity = async () => {
  let communityList = JSON.parse(
    (await AsyncStorage.getItem('community')) ?? '[]',
  ) as CommunityModel[];
  return communityList;
};
