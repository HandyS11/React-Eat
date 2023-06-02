import React from "react";
import { View, Text } from "react-native";
import { RestaurantList } from "../components/RestaurantList"

export function HomeScreen() {
  return(
    <View>
      <RestaurantList/>
    </View>
  )
}