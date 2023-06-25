import {Text, View, Image, StyleSheet, FlatList, Button} from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToBasket } from "../../redux/actions/AddItemToBasket";
import { useNavigation } from "@react-navigation/native";

export function RestaurantScreen({route}) {
    const restaurant = useSelector(state => {
        // @ts-ignore
        return state.appReducer.restaurantList[route.params.itemIndex]
      });
    const dispatch = useDispatch()
    
    const navigation = useNavigation()
    navigation.setOptions({title: restaurant.name})
    return(
        <View>
            <Image style={styles.image}
                source={{uri: restaurant.image}}/>
            <View style={styles.container}>
                <Text style={styles.h3}>{restaurant.name}</Text>
                <Text>{restaurant.description}</Text>
                <FlatList 
                  data={restaurant.articles}
                  renderItem={({item}) => 
                    <View style={styles.card}>
                      <Text style={{flex: 1, verticalAlign: "middle"}}>{item.name}</Text>
                      <Text style={{paddingRight: 5, verticalAlign: "middle"}}>{item.price}</Text>
                      <Button title="Ajouter au panier" onPress={() => {
                          dispatch(addItemToBasket(item))
                      }}/>
                    </View>
                  }>

                </FlatList>
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
    card: {
      display: "flex",
      flexDirection: "row",
      paddingBottom: 5
    }
  });