import React, { useEffect } from 'react';
import { FlatList, Pressable, View } from 'react-native';
import { RestaurantCard } from './RestaurantCard';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { getRestaurants } from "../../storage/restaurantsStorage";

export function RestaurantList() {
  const restaurantList = useSelector(state => {
    // @ts-ignore
    return state.appReducer.restaurantList
  });
  const navigation = useNavigation()
  const dispatch = useDispatch()

  useEffect(() => {
    const loadRestaurants = async () => {
      // @ts-ignore
      await dispatch(getRestaurants())
    };
    loadRestaurants()
  }, [dispatch])

  return (
    <View>
      <FlatList
        data={restaurantList}
        renderItem={({item, index}) => {
          return (
            //@ts-ignore
            <Pressable onPress={() => { navigation.navigate('RestaurantDetail', {itemIndex: index}) }}>
              <RestaurantCard item={item}/>
            </Pressable>
          )
        }}
      />
    </View>
  );
}