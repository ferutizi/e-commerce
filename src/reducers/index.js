import {combineReducers} from "redux";
import { shoppingReducer } from "./shoppingReducer";
import { showCartReducer } from "./showCartReducer"

const reducer = combineReducers({
    shopping: shoppingReducer,
    cart: showCartReducer,
});

export default reducer;