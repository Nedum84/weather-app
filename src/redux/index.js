import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { rootReducer } from "./reducers/root.reducer";

const reduxStore = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default reduxStore;
