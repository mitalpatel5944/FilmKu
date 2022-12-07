import {createStore} from "redux";
import countReducer from "./Reducer";

const Store = createStore(countReducer);

export default Store;
