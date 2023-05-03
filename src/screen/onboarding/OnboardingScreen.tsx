import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import FillButton from '../../components/button/FillButton';
import {RootScreens, RootStackList} from '../../navigator';
import {StackNavigationProp} from '@react-navigation/stack';

type NavigationProps = StackNavigationProp<
  RootStackList,
  RootScreens.Onboarding
>;
interface Props {
  navigation: NavigationProps;
}

const OnboardingScreen = (props: Props) => {
  const {navigation} = props;

  return (
    <SafeAreaView style={styles.safe_area}>
      <View style={styles.view}>
        <Text style={styles.logo}>SAFE</Text>
        <View style={styles.spacer} />
        <FillButton
          title="로그인"
          backgroundColor="#8A8A8A"
          tintColor="#EEE"
          onPress={() => {
            navigation.navigate(RootScreens.Login);
          }}
        />
        <FillButton
          title="회원가입"
          backgroundColor="#D9D9D9"
          tintColor="#6C6B6B"
          onPress={() => {
            navigation.navigate(RootScreens.SignUp);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe_area: {
    flex: 1,
    backgroundColor: '#EEE',
  },
  view: {
    marginHorizontal: 16,
  },
  spacer: {
    flex: 1,
    marginBottom: '100%',
  },
  logo: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 100,
    fontWeight: 'bold',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 3.82,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    marginTop: 117,
  },
});

export default OnboardingScreen;
