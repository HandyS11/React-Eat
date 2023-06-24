import {Button, Text, View, FlatList} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

export function BasketScreen() {
    const stack = useNavigation()
    const basket = useSelector(state => {
        // @ts-ignore
        return state.appReducer.basket
      });
    return(
        <View>
            <FlatList data={basket}
            renderItem={(item) => 
                <View>
                    <Text>{item.name}</Text>
                    <Text>{item.price}</Text>
                </View>
            }>

            </FlatList>
        </View>
    )
}