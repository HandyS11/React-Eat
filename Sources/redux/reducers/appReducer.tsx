import { ActionEnum } from "../../constants/actionEnum";
import { storeBasket } from "../../storage/basketStorage";

const initialState = {
    restaurantList: [],
    basket: [],
    prixPanier: 0,
    pseudo: 'User'
}

export const appReducer = (state = initialState, action) => {
  let newState
  switch (action.type) {
    case ActionEnum.FETCH_RESTAURANTS:
      return {...state, restaurantList: action.payload};
    case ActionEnum.ADD_ITEM_TO_BASKET:
      newState = {...state, basket: [...state.basket, action.item]}
      newState.prixPanier = recalculerPrixTotal(newState.basket)
      storeBasket(newState.basket)
      return newState
    case ActionEnum.REMOVE_ITEM_FROM_BASKET:
      newState = {...state, basket: [...state.basket]}
      newState.basket.splice(action.index, 1)
      newState.prixPanier = recalculerPrixTotal(newState.basket)
      storeBasket(newState.basket)
      return newState
    case ActionEnum.FETCH_BASKET:
      newState = {...state, basket: action.payload}
      newState.prixPanier = recalculerPrixTotal(newState.basket)
      return newState
    case ActionEnum.EDIT_PSEUDO:
      newState = {...state, pseudo: action.payload}
      return newState
    default:
      return state;
  }
}

function recalculerPrixTotal(articles: Article[]){
  let total: Number = 0

  for(let item of articles){
    // @ts-ignore
    total = total + item.price
  }

  return total
}