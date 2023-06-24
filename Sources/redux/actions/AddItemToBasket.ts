import { ActionEnum } from "../../constants/actionEnum";

export const addItemToBasket = (item: Article) => {
  return {
    type: ActionEnum.ADD_ITEM_TO_BASKET,
    item
  };
}