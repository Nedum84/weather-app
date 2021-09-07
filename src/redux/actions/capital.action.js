import { SAVE_CAPITAL } from "../types/action.types";

export const addCapital = (capital) => {
  return (dispatch) => {
    dispatch({ type: SAVE_CAPITAL, capital });
  };
};
