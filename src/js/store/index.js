import { createStore } from "redux";
import combineReducers from "../reducers/index";

const store = createStore(combineReducers);

function configureStore(){
    return store;
}

export default configureStore;