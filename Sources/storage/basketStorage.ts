import AsyncStorage from "@react-native-async-storage/async-storage"
import { setBasket } from "../redux/actions/setBasket"

const BASKET_LOCAL_NAME = 'localBasket'

export const getBasket = () => {
  return async dispatch => {
    try {
      const basket = await getBasketFromAsyncStorage()
      dispatch(setBasket(basket))
    } catch (e) {
      console.error('==== Error ====', e)
    }
  }
}

export const storeBasket = async (basket: Article[]) => {
  try {
    const jsonBasket = JSON.stringify(basket)
    await AsyncStorage.setItem(BASKET_LOCAL_NAME, jsonBasket)
  } catch(e){
    console.error('An error occured', e)
  }
}

const getBasketFromAsyncStorage = async () => {
  try {
    const jsonBasket = await AsyncStorage.getItem(BASKET_LOCAL_NAME)
    return jsonBasket != null ? JSON.parse(jsonBasket) : []
  } catch(e) {
    console.error('An error occured', e)
  }
}