import { SAVE_CAPITAL, SELECTED_CAPITAL } from "../types/action.types";

const INITIAL_STATE = {
  capitals: ["Abuja"],
  selectedCapital: "",
};
//--> Dispatch state reducer for
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_CAPITAL:
      return state.capitals.length === 0
        ? { ...state, capitals: [action.capital] }
        : { ...state, capitals: [...state.capitals, action.capital] };

    case SELECTED_CAPITAL:
      return { ...state, selectedCapital: action.capital };
    default:
      return state;
  }
};

export default reducer;
