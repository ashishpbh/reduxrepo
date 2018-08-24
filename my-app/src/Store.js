import { createStore, combineReducers, applyMiddleware } from "redux";
import Thunk from "redux-thunk";
import Reducer from "./reducer";
import Reducer1 from "./reducer1";
// const InitialState = { name: "Sonu is nice" };
const rootReducer = combineReducers({ res: Reducer, res2: Reducer1 });
const store = createStore(rootReducer);
export default store;
