import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import STextField from '../../components/textfield/STextField';
import SFillButton from '../../components/button/SFillButton';
import {StyleSheet, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootScreens, RootStackList} from '../../navigator';

type NavigationProps = StackNavigationProp<RootStackList, RootScreens.SignUp>;
interface Props {
  navigation: NavigationProps;
}

const SignUpScreen = (props: Props) => {
  const {navigation} = props;

  const [id, setId] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [checkPassword, setCheckPassword] = useState<string>('');

  return (
    <SafeAreaView style={styles.safe_area_view}>
      <STextField
        title="아이디"
        text={id}
        placeholder="아이디"
        onChangeText={setId}
      />
      <STextField
        title="이름"
        text={name}
        placeholder="이름"
        onChangeText={setName}
      />
      <STextField
        title="전화번호"
        text={phoneNumber}
        placeholder="전화번호"
        onChangeText={setPhoneNumber}
      />
      <STextField
        title="비밀번호"
        text={password}
        placeholder="비밀번호"
        onChangeText={setPassword}
      />
      <STextField
        title="비밀번호 확인"
        text={checkPassword}
        placeholder="비밀번호 확인"
        onChangeText={setCheckPassword}
      />
      <View style={styles.spacer} />
      <SFillButton
        title="회원가입"
        backgroundColor="#D9D9D9"
        tintColor="#6C6B6B"
        onPress={() => {
          navigation.push(RootScreens.Main);
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe_area_view: {
    marginHorizontal: 16,
  },
  spacer: {
    marginBottom: 50,
  },
});

export default SignUpScreen;
