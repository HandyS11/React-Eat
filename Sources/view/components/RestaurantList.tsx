import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import { RestaurantCard } from './RestaurantCard';
import { useSelector } from 'react-redux';

export function RestaurantList() {
  // @ts-ignore
  const restaurantList = useSelector(state => {
    return state.appReducer.restaurantList
  });
  return (
    <View>
      <FlatList
        data={restaurantList}
        renderItem={({item}) => RestaurantCard(item)}
      />
    </View>
  );
}