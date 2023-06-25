import {Text, View, FlatList, StyleSheet, Button} from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItemFromBasket } from "../../redux/actions/RemoveItemFromBasket";

export function BasketScreen() {
    const basket = useSelector(state => {
        // @ts-ignore
        return state.appReducer.basket
      });
    const dispatch = useDispatch()

    return(
        <View>
            <FlatList data={basket}

            // @ts-ignore
            renderItem={({item, index}) => 
                <View style={styles.card}>
                    <Text style={{flex: 1}}>{item.name}</Text>
                    <Text style={{ paddingRight: 10}}>{item.price}</Text>
                    <Button title="Supprimer" onPress={() => {
                        dispatch(removeItemFromBasket(index))
                    }}/>
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