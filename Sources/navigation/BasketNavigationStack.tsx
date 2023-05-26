import {createStackNavigator} from "@react-navigation/stack";
import {BasketScreen} from "../screens/BasketScreen";
import {OrderScreen} from "../screens/OrderScreen";

export default function BasketStackNavigation() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={({route}) => ({
            headerShown: true,
        })}>
            <Stack.Screen name="BasketPage" component={BasketScreen} options={{
                title: "Basket"
            }}/>
            <Stack.Screen name="Order" component={OrderScreen}/>
        </Stack.Navigator>
    );
}