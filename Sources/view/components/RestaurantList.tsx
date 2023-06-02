import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import { RestaurantCard } from './RestaurantCard';
import Restaurant from '../../model/Restaurant';

export function RestaurantList() {
  return (
    <View>
      <FlatList
        data={[
          {name: 'Mcdo', description: 'Y\'a des bigMac'},
          {name: 'Wok', description: 'Y\'a des sushi'},
          {name: 'Burger King', description: 'Y\'a des Whopper'},
        ]}
        renderItem={({item}) => RestaurantCard(item)}
      />
    </View>
  );
}