import {createStackNavigator} from "@react-navigation/stack";
import {BasketScreen} from "../view/screens/BasketScreen";
import { HomeScreen } from "../view/screens/HomeScreen";
import {OrderScreen} from "../view/screens/OrderScreen";
import { RestaurantScreen } from "../view/screens/RestaurantScreen";

export default function HomeStackNavigation() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={({route}) => ({
            headerShown: true,
        })}>
            <Stack.Screen name="RestaurantList" component={HomeScreen} options={{
                title: "Restaurant"
            }}/>
            <Stack.Screen name="RestaurantDetail" component={RestaurantScreen}/>
        </Stack.Navigator>
    );
}