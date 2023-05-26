import {Button, Text, View} from "react-native";
import React from "react";
import { Stack } from "../navigation/BasketNavigationStack";
import { useNavigation } from "@react-navigation/native";

export function BasketScreen() {
    const stack = useNavigation()
    return(
        <View>
            <Text>Hello</Text>
            <Button onPress={() => stack.navigate('Order')} title="Button"/>
        </View>
    )
}