import {combineReducers} from "redux";
import contadorReducer from "./contadorReducer";
import { shoppingReducer } from "./shoppingReducer";
import { showCartReducer } from "./showCartReducer"

const reducer = combineReducers({
    contador: contadorReducer,
    shopping: shoppingReducer,
    cart: showCartReducer,
});

export default reducer;