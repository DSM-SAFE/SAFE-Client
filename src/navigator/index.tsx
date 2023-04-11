import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {OnboardingScreen} from '../screen/onboarding';
import {LoginScreen} from '../screen/login';

export enum RootScreens {
  Onboarding = 'Onboarding',
  Login = 'Login',
}

export type RootStackList = {
  Onboarding: undefined;
  Login: undefined;
};

const Stack = createStackNavigator<RootStackList>();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={RootScreens.Onboarding}>
        <Stack.Screen
          name={RootScreens.Onboarding}
          component={OnboardingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name={RootScreens.Login} component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
