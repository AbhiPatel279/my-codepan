import {combineReducers} from "redux";
import {productReducer,selectProductReducer} from "./ProductReducer"

const reducers = combineReducers({
    allProducts:productReducer,
    product:selectProductReducer,
});

export default reducers;