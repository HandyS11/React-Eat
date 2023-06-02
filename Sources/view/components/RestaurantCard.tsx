import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Restaurant from '../../model/Restaurant';

export function RestaurantCard(item: Restaurant){
  return(
    <View style={styles.container}>
      <Text style={styles.title}>{item.name}</Text>
      <Text>{item.description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
    margin: 5,
    padding: 5,
    borderRadius: 10
  },
  title: {
    fontSize: 24
  },
});