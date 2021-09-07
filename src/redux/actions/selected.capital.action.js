import { SELECTED_CAPITAL } from "../types/action.types";

export const saveSelectedCapital = (capital) => {
  return (dispatch) => {
    dispatch(save(capital));
  };

  function save(capital) {
    return { type: SELECTED_CAPITAL, capital };
  }
};
