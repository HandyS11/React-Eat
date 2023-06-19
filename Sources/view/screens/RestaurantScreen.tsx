import {Text, View, Image, StyleSheet} from "react-native";
import React from "react";
import { useSelector } from "react-redux";

export function RestaurantScreen() {
    const restaurant = useSelector(state => {
        // @ts-ignore
        return state.appReducer.restaurantList[0]
      });
    return(
        <View>
            <Image style={styles.image}
                source={{uri: restaurant.image}}/>
            <View style={styles.container}>
                <Text style={styles.h3}>{restaurant.name}</Text>
                <Text>{restaurant.description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      margin: 5,
      padding: 5,
      borderRadius: 10,
    },
    image: {
      width: '100%',
      height: 200,
      resizeMode: 'cover',
    },
    h3: {
        fontSize: 24,
        fontWeight: 'bold',
    },
  });