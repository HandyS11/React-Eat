import { ActionEnum } from "../../constants/actionEnum";

export const removeItemFromBasket = (index: Number) => {
  return {
    type: ActionEnum.REMOVE_ITEM_FROM_BASKET,
    index
  };
}