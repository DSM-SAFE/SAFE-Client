import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {OnboardingScreen} from '../screen/onboarding';
import {LoginScreen} from '../screen/login';
import {SignUpScreen} from '../screen/signup';
import Icon from 'react-native-vector-icons/Ionicons';
import BottomTabNavigator from './bottomTab';

export enum RootScreens {
  Onboarding = 'Onboarding',
  Login = 'Login',
  SignUp = 'SignUp',
  Main = 'Main',
}

export type RootStackList = {
  Onboarding: undefined;
  Login: undefined;
  SignUp: undefined;
  Main: undefined;
};

const Stack = createStackNavigator<RootStackList>();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={RootScreens.Onboarding}
        screenOptions={{
          headerStyle: {
            backgroundColor: '#F5F4F4',
          },
          headerBackTitleVisible: false,
          headerTintColor: '#000',
          headerBackImage: props => {
            return (
              <Icon
                style={{marginLeft: 16}}
                name="arrow-back-outline"
                color={props.tintColor}
                size={19}
              />
            );
          },
        }}>
        <Stack.Screen
          name={RootScreens.Onboarding}
          component={OnboardingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={RootScreens.Login}
          component={LoginScreen}
          options={{
            title: '로그인',
          }}
        />
        <Stack.Screen
          name={RootScreens.SignUp}
          component={SignUpScreen}
          options={{
            title: '회원가입',
          }}
        />
        <Stack.Screen
          name={RootScreens.Main}
          component={BottomTabNavigator}
          options={{headerShown: false, gestureEnabled: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
