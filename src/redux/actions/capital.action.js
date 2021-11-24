import { SAVE_CAPITAL } from "../types/action.types";

export const addCapital = (capital) => {
  return (dispatch) => {
    dispatch({ type: SAVE_CAPITAL, capital });
  };
};

// export const addCapital = (capital) => {
//   return (dispatch) => {
//     dispatch(add(capital));
//   };

//   function add(capital) {
//     return { type: SAVE_CAPITAL, capital };
//   }
// };
