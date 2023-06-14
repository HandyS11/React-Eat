import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import { RestaurantCard } from './RestaurantCard';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

export function RestaurantList() {
  // @ts-ignore
  const restaurantList = useSelector(state => {
    return state.appReducer.restaurantList
  });
  const navigation = useNavigation()
  return (
    <View>
      <FlatList
        data={restaurantList}
        renderItem={({item}) => <RestaurantCard item={item}/>}
      />
    </View>
  );
}