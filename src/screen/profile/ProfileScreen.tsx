import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import STextField from '../../components/textfield/STextField';
import {Image, StyleSheet} from 'react-native';

const ProfileScreen = () => {
  const [name, setName] = useState('김기영');
  const [id, setId] = useState('gy0530');
  const [phoneNumber, setPhoneNumber] = useState('010-6482-3852');

  return (
    <SafeAreaView style={styles.safe_area_view}>
      <Image style={styles.image} source={{uri: ''}} />
      <STextField
        disabled={true}
        title="이름"
        text={name}
        placeholder=""
        onChangeText={setName}
        style={styles.textField}
      />
      <STextField
        disabled={true}
        title="아이디"
        text={id}
        placeholder=""
        onChangeText={setId}
        style={styles.textField}
      />
      <STextField
        disabled={true}
        title="전화번호"
        text={phoneNumber}
        placeholder=""
        onChangeText={setPhoneNumber}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe_area_view: {
    flex: 1,
    marginHorizontal: 16,
    alignItems: 'center',
  },
  image: {
    backgroundColor: 'gray',
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 34,
  },
  textField: {
    marginBottom: 18,
  },
});

export default ProfileScreen;
