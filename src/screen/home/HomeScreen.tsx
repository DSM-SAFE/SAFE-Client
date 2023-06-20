import Geolocation from '@react-native-community/geolocation';
import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MapView, {Callout, Marker} from 'react-native-maps';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {RootScreens, RootStackList} from '../../navigator';
import {StackNavigationProp} from '@react-navigation/stack';
import {CriminalModel} from '../../localDB/Model/CriminalModel';
import {getCriminal} from '../../localDB/service/CriminalService';

interface Location {
  latitude: number;
  longitude: number;
}

interface Props {
  navigation: StackNavigationProp<RootStackList, RootScreens.Home>;
}

const HomeScreen = ({navigation}: Props) => {
  const [location, setLocation] = useState<Location | undefined>(undefined);
  const [criminal, setCriminal] = useState<CriminalModel[]>([]);

  useEffect(() => {
    const asyncGetCommunity = async () => {
      const cri = await getCriminal();
      setCriminal(cri);
    };
    asyncGetCommunity();
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate(RootScreens.AddCriminal)}>
          <FontAwesome style={styles.headerRight} name="plus" size={20} />
        </TouchableOpacity>
      ),
    });
  });

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setLocation({latitude, longitude});
      },
      error => {
        console.log(error);
      },
      {
        enableHighAccuracy: true,
        distanceFilter: 0,
        interval: 5000,
        fastestInterval: 2000,
      },
    );
  });

  return (
    <View style={styles.view}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location?.latitude!,
          longitude: location?.longitude!,
          latitudeDelta: 0.007234,
          longitudeDelta: 0.007234,
        }}
        region={{
          latitude: location?.latitude!,
          longitude: location?.longitude!,
          latitudeDelta: 0.007234,
          longitudeDelta: 0.007234,
        }}>
        {criminal.map((cri: CriminalModel) => {
          return (
            <Marker
              coordinate={{latitude: cri.latitude, longitude: cri.longitude}}
              title={cri.name}
              pinColor="#FF0000">
              <Callout>
                <View>
                  <Image style={styles.image} source={{uri: cri.imageUri}} />
                  <Text>{cri.name}</Text>
                  <Text>{cri.characteristics}</Text>
                </View>
              </Callout>
            </Marker>
          );
        })}
        <Marker
          coordinate={{
            latitude: location?.latitude!,
            longitude: location?.longitude!,
          }}
          pinColor={'#000'}
          title={'내 위치'}>
          <Callout>
            <View>
              <Image
                style={styles.image}
                source={{
                  uri: 'https://www.chemicalnews.co.kr/news/photo/202106/3636_10174_4958.jpg',
                }}
              />
              <Text>김기영</Text>
              <Text>"반가워요"</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  headerRight: {
    paddingRight: 20,
  },
  image: {
    width: 40,
    height: 40,
    backgroundColor: 'gray',
  },
});

export default HomeScreen;
