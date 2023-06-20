import {AsyncStorage} from 'react-native';
import {CriminalModel} from '../Model/CriminalModel';

export const setCriminal = async (props: CriminalModel) => {
  let criminal = JSON.parse(
    (await AsyncStorage.getItem('criminal')) ?? '[]',
  ) as CriminalModel[];
  AsyncStorage.setItem('criminal', JSON.stringify([...criminal, props]));
};

export const getCriminal = async () => {
  let criminalList = JSON.parse(
    (await AsyncStorage.getItem('criminal')) ?? '[]',
  ) as CriminalModel[];
  return criminalList;
};
