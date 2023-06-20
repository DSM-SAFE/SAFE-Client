import {AsyncStorage} from 'react-native';
import {UserModel} from '../Model/UserModel';

export const setUser = (props: UserModel) => {
  AsyncStorage.setItem('user', JSON.stringify(props));
};

export const getUser = async () => {
  const user = (await AsyncStorage.getItem('user')) ?? '';
  return JSON.parse(user);
};
