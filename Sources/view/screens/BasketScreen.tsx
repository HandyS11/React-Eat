import {Text, View, FlatList, StyleSheet, Button} from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItemFromBasket } from "../../redux/actions/RemoveItemFromBasket";

export function BasketScreen() {
    const basket = useSelector(state => {
        // @ts-ignore
        return state.appReducer.basket
      });
    const prixTotal = useSelector(state => {
        // @ts-ignore
        return state.appReducer.prixPanier
    })
    const dispatch = useDispatch()

    return(
        <View>
            <FlatList data={basket}

            // @ts-ignore
            renderItem={({item, index}) => 
                <View style={styles.card}>
                    <Text style={{flex: 1, verticalAlign: "middle"}}>{item.name}</Text>
                    <Text style={{ paddingRight: 10, verticalAlign: "middle"}}>{item.price}</Text>
                    <Button title="Supprimer" onPress={() => {
                        dispatch(removeItemFromBasket(index))
                    }}/>
                </View>
            }/>
            
            <Text style={{fontWeight: "bold", paddingLeft: 5}}>Total: {Math.round(prixTotal * 100) / 100}€</Text>
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