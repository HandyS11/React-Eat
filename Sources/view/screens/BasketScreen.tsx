import {Text, View, FlatList, StyleSheet} from "react-native";
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

            // @ts-ignore
            renderItem={({item}) => 
                <View style={styles.card}>
                    <Text style={{flex: 1}}>{item.name}</Text>
                    <Text>{item.price}</Text>
                </View>
            }/>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
      display: "flex",
      flexDirection: "row",
      paddingLeft: 15,
      paddingTop: 5,
      paddingRight: 15,
    }
  });