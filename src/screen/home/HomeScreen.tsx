import Geolocation from '@react-native-community/geolocation';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import MapView from 'react-native-maps';

interface Location {
  latitude: number;
  longitude: number;
}

const HomeScreen = () => {
  const [location, setLocation] = useState<Location | undefined>(undefined);

  useEffect(() => {
    const _watchId = Geolocation.watchPosition(
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

    return () => {
      if (!_watchId) {
        Geolocation.clearWatch(_watchId);
      }
    };
  });

  return location ? (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: location?.latitude!,
        longitude: location?.longitude!,
        latitudeDelta: 0.007234,
        longitudeDelta: 0.007234,
      }}
    />
  ) : (
    <Text>...Loading</Text>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

export default HomeScreen;
