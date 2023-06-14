import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Restaurant from '../../model/Restaurant';

type RestaurantCardProps = { 
  item: Restaurant 
}

export function RestaurantCard(props: RestaurantCardProps){
  let item = props.item
  return(
    <View style={styles.container}>
      <Image style={styles.image} 
        source={{uri: item.image}}/>
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
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  }
});