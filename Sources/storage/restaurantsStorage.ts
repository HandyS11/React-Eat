import { stubRestaurant } from "../constants/stub"
import { setRestaurantsList } from "../redux/actions/setRestaurantsList"

export const getRestaurants = () => {
  return async dispatch => {
    try {
      //const restaurantListPromise = await fetch('http://localhost:8080/restaurants');
      //const restaurantList = await restaurantListPromise
      // Nous avons essayé de lier l'application à l'API, 
      //mais il y avait un problème de Cross-Origin que nous n'avons pas réussi à résoudre.

      const restaurantList = stubRestaurant
      dispatch(setRestaurantsList(restaurantList))
    } catch (e) {
      console.error('Error :', e)
    }
  }
}