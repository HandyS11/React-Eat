import { ActionEnum } from "../../constants/actionEnum";
import { stubRestaurant } from "../../constants/stub";

const initialState = {
    restaurantList: [...stubRestaurant]
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
      case ActionEnum.FETCH_RESTAURANTS:
        return {...state, restaurants: action.payload};
      default:
        return state;
    }
  }