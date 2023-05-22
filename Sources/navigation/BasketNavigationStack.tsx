import {createStackNavigator} from "@react-navigation/stack";
import {BasketScreen} from "../screens/BasketScreen";
import {OrderScreen} from "../screens/OrderScreen";

export default function StackNavigation() {
    
    // @ts-ignore
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Basket" component={BasketScreen}/>
            <Stack.Screen name="Order" component={OrderScreen}/>
        </Stack.Navigator>
    );
}