import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TextField} from '../../components/textfield';
import {FillButton} from '../../components/button';
import {StyleSheet, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootScreens, RootStackList} from '../../navigator';

type NavigationProps = StackNavigationProp<RootStackList, RootScreens.Login>;
interface Props {
  navigation: NavigationProps;
}

const LoginScreen = (props: Props) => {
  const {navigation} = props;

  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <SafeAreaView style={styles.safe_area_view}>
      <TextField
        title="아이디"
        text={id}
        placeholder="아이디"
        onChangeText={setId}
      />
      <TextField
        title="비밀번호"
        text={password}
        placeholder="비밀번호"
        onChangeText={setPassword}
      />
      <View style={styles.spacer} />
      <FillButton
        title="로그인"
        backgroundColor="#8A8A8A"
        tintColor="#EEE"
        onPress={() => {
          navigation.push(RootScreens.Main);
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe_area_view: {
    flex: 1,
    marginHorizontal: 16,
  },
  spacer: {
    marginBottom: 48,
  },
});

export default LoginScreen;
