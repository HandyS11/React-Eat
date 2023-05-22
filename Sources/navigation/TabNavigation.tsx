import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { HomeScreen } from '../screens/HomeScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabNavigation() {
  const BottomTabNavigator = createBottomTabNavigator();
  return (
      <NavigationContainer>
          <BottomTabNavigator.Navigator initialRouteName="Home" 
          screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
              <BottomTabNavigator.Screen name="Home" component={HomeScreen}
                                         options={{
                                             title: 'Home',
                                         }}/>
              <BottomTabNavigator.Screen name="Settings" component={SettingsScreen}
                                         options={{
                                             title: 'Settings',
                                         }}/>
          </BottomTabNavigator.Navigator>
      </NavigationContainer>
  )
}