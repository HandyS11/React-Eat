import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Restaurant from '../../model/Restaurant';

export function RestaurantCard(item: Restaurant){
  return(
    <View style={styles.container}>
      <Image style={{
          width: '100%',
          height: 200,
          resizeMode: 'cover',
          borderRadius: 10,
        }} 
        source={{uri: item.image}} />
      <Text style={styles.title}>{item.name}</Text>
      <Text>{item.description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 5,
    borderRadius: 10
  },
  title: {
    fontSize: 24
  },
});