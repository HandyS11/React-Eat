import { ActionEnum } from "../../constants/actionEnum";
import { stubRestaurant } from "../../constants/stub";

const initialState = {
    restaurantList: [...stubRestaurant],
    basket: []
}

export const appReducer = (state = initialState, action) => {
  let newState
  switch (action.type) {
    case ActionEnum.FETCH_RESTAURANTS:
      return {...state, restaurants: action.payload};
    case ActionEnum.ADD_ITEM_TO_BASKET:
      newState = {...state, basket: [...state.basket, action.item]}
      return newState
    case ActionEnum.REMOVE_ITEM_FROM_BASKET:
      newState = {...state, basket: [...state.basket]}
      newState.basket.splice(action.index, 1)
      return newState
    default:
      return state;
  }
}


/* Cours

Pour redux, les objets bindés sont immuables. On peut changer la référence de l'objet dans redux, ce qui va lancer la notification de modification et recharger tous l'écran.
Quand on veux faire une modification, on lance donc une action que le reducer va traiter, on va modifier la référence, et la page va être rechargée avec les données à jours.

*/