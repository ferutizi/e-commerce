import {
    ADD_TO_CART,
    CLEAR_CART,
    REMOVE_ALL_FROM_CART,
    REMOVE_ONE_FROM_CART,
    RENDER_SEARCH,
    HOME
} from "../types";

export const addToCart = (id) => ({type: ADD_TO_CART, payload: id});

export const deleteFromCart = (id, all = false) => 
    all 
        ? {type: REMOVE_ALL_FROM_CART, payload: id}
        : {type: REMOVE_ONE_FROM_CART, payload: id};

export const clearCart = () => ({type: CLEAR_CART});

export const renderSearch = (id) => ({type: RENDER_SEARCH, payload: id});

export const home = () => ({type: HOME});