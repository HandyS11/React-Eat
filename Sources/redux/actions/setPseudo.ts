import { ActionEnum } from "../../constants/actionEnum";

export const setPseudo = (newPseudo: string) => {
  return {
    type: ActionEnum.EDIT_PSEUDO,
    payload: newPseudo
  };
}