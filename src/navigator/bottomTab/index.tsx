import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../../screen/home';
import {CommunityScreen} from '../../screen/community';
import {ProfileScreen} from '../../screen/profile';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const BottomTab = createBottomTabNavigator();

enum TabScreen {
  Community = 'Community',
  Home = 'Home',
  Profile = 'Profile',
}

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName={TabScreen.Home}
      screenOptions={{
        tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: '#000',
      }}>
      <BottomTab.Screen
        name={TabScreen.Community}
        component={CommunityScreen}
        options={{
          title: '커뮤니티',
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon name="bars" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name={TabScreen.Home}
        component={HomeScreen}
        options={{
          title: '홈',
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon name="home" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name={TabScreen.Profile}
        component={ProfileScreen}
        options={{
          title: '프로필',
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon name="user" size={size} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
