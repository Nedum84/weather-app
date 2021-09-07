import { SAVE_CAPITAL, SELECTED_CAPITAL } from "../types/action.types";

const initialState = {
  capitals: ["Abuja"],
  selectedCapital: "",
};

//--> Dispatch state reducer for
export default function reducer(state = initialState, action) {
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
}
