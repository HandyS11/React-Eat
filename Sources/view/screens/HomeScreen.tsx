import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { RestaurantList } from "../components/RestaurantList"
import { getBasket } from "../../storage/basketStorage";
import { useDispatch } from "react-redux";

export function HomeScreen() {
  const dispatch = useDispatch()

  useEffect(() => {
    const loadBasket = async () => {
      // @ts-ignore
      await dispatch(getBasket())
    };
    loadBasket()
  }, [dispatch])

  return(
    <View>
      <RestaurantList/>
    </View>
  )
}