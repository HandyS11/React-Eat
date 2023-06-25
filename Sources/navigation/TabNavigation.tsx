import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SettingsScreen } from '../view/screens/SettingsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import BasketNavigationStack from './BasketNavigationStack';
import { COLORS } from '../assets/colors';
import HomeStackNavigation from './HomeNavigationStack';

export default function TabNavigation() {
  const BottomTabNavigator = createBottomTabNavigator();

  // TODO : mettre les routes en constantes

  return (
    <NavigationContainer>
      <BottomTabNavigator.Navigator initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: 'gray',
          headerShown: true,
        })}>
        <BottomTabNavigator.Screen name="Home" component={HomeStackNavigation}
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
              return <Ionicons name='home-outline' size={size} color={color} />
            }
          }} />
        <BottomTabNavigator.Screen name="Basket" component={BasketNavigationStack}
          options={{
            title: 'Basket',
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
              return <Ionicons name='cart-outline' size={size} color={color} />
            }
          }} />
        <BottomTabNavigator.Screen name="Settings" component={SettingsScreen}
          options={{
            title: 'Settings',
            tabBarIcon: ({ focused, color, size }) => {
              return <Ionicons name='ios-list' size={size} color={color} />;
            }
          }} />
      </BottomTabNavigator.Navigator>
    </NavigationContainer>
  );
}