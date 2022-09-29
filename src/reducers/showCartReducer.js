import { SHOW_CART } from "../types";

const initialState = false;

export function showCartReducer(state = initialState, action) {
    switch(action.type) {
        case SHOW_CART:
            return !state;
        default:
            return state;
    }
}