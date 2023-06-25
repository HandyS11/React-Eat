import { ActionEnum } from "../../constants/actionEnum"

export const setBasket = (basket: Article[]) => {
  return {
    type: ActionEnum.FETCH_BASKET,
    payload: basket
  }
}