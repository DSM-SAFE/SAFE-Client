import React, {useState} from 'react';
import {ImagePicker} from '../../components/imagePicker';
import {TextField} from '../../components/textfield';
import {FillButton} from '../../components/button';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAvoidingView, StyleSheet, View} from 'react-native';
import {setCriminal} from '../../localDB/service/CriminalService';

const AddCriminalScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState<string>('');
  const [latitude, setLatitude] = useState<string>('');
  const [longitude, setLongitude] = useState<string>('');
  const [characteristics, setCharacteristics] = useState<string>('');
  const [uri, setUri] = useState<string>('');

  const addCriminal = () => {
    setCriminal({
      name: name,
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
      imageUri: uri,
      characteristics: characteristics,
    });
  };

  return (
    <KeyboardAvoidingView style={styles.view} behavior="padding">
      <ImagePicker uri={uri} setUri={setUri} />
      <TextField
        title="이름"
        text={name}
        placeholder="이름"
        onChangeText={setName}
        style={styles.textfield}
      />
      <TextField
        title="위도"
        text={latitude}
        placeholder="위도"
        onChangeText={setLatitude}
        style={styles.textfield}
      />
      <TextField
        title="경도"
        text={longitude}
        placeholder="경도"
        onChangeText={setLongitude}
        style={styles.textfield}
      />
      <TextField
        title="특징"
        text={characteristics}
        placeholder="특징"
        onChangeText={setCharacteristics}
        style={styles.textfield}
      />
      <View style={styles.spacer} />
      <FillButton
        title="추가"
        backgroundColor="#8A8A8A"
        tintColor="#EEE"
        onPress={() => {
          addCriminal();
          navigation.goBack();
        }}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginHorizontal: 16,
  },
  textfield: {
    marginBottom: 18,
  },
  spacer: {
    height: 34,
  },
});

export default AddCriminalScreen;
