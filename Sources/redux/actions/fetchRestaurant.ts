import Restaurant from "../../model/Restaurant";
import { ActionEnum } from "../../constants/actionEnum";

export const fetchRestaurants = (restaurantList: Restaurant[]) => {
  return {
    type: ActionEnum.FETCH_RESTAURANTS,
    payload: restaurantList,
  };
}