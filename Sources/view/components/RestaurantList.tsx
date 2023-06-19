import React from 'react';
import {FlatList, Pressable, View} from 'react-native';
import { RestaurantCard } from './RestaurantCard';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

export function RestaurantList() {
  const restaurantList = useSelector(state => {
    // @ts-ignore
    return state.appReducer.restaurantList
  });
  const navigation = useNavigation()
  return (
    <View>
      <FlatList
        data={restaurantList}
        renderItem={({item, index}) => {
          return (
            <Pressable onPress={() => { navigation.navigate('RestaurantDetail', {itemIndex: index}) }}>
              <RestaurantCard item={item}/>
            </Pressable>
          )
        }}
      />
    </View>
  );
}