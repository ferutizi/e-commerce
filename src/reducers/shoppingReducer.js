import {
    ADD_TO_CART,
    CLEAR_CART,
    REMOVE_ALL_FROM_CART,
    REMOVE_ONE_FROM_CART,
    RENDER_SEARCH,
    HOME
} from "../types";
import Products from "../Products.json"
import { produceWithPatches } from "immer";

export const initialState = {
    products: Products,
    cart:[],
    total: 0,
    cantidadItems: 0,
};

function renderSearch(state, action) {
    let newItem = Products.filter(
        product => product.id === action.payload
        );
    return newItem
        ? {
            ...state,
            products: newItem,
        }
        : null
}

function addToCart(state, action) {
    let newItem = Products.find(
        product => product.id === action.payload
        );
    let itemInCart = state.cart.find(item => item.id === newItem.id)
    return itemInCart 
        ? {
            ...state,
            cart: state.cart.map(item => item.id === newItem.id 
                ? {...item, amount: item.amount +1} 
                : item),
            total: state.total + newItem.price,
            cantidadItems: state.cantidadItems + 1,
            }
        : {
            ...state,
            cart: [...state.cart, {...newItem, amount: +1}],
            total: state.total + newItem.price,
            cantidadItems: state.cantidadItems + 1,
        }
}

function removeOneFromCart(state, action) {
    let newItem = Products.find(
        product => product.id === action.payload
        );
    let itemToDelete = state.cart.find(
        product => product.id === action.payload
    );
    itemToDelete.amount--;
    return itemToDelete.amount > 0 
    ? { 
        ...state,
        cart: state.cart.map(item => item.id === itemToDelete.id 
                ? {...item, amount: itemToDelete.amount} 
                : item
        ),
        total: state.total - newItem.price,
        cantidadItems: state.cantidadItems - 1,
    }
    : {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
        total: state.total - newItem.price,
        cantidadItems: state.cantidadItems - 1,
    };
}

function removeAllFromCart(state, action) {
    let newItem = state.products.find(
        product => product.id === action.payload
        );
    let itemInCart = state.cart.find(item => item.id === newItem.id)
    return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
        total: state.total - (itemInCart.price * itemInCart.amount),
        cantidadItems: state.cantidadItems - itemInCart.amount,
    };
}

export function shoppingReducer(state = initialState, action) {
    console.log(state.cantidadItems)
    switch(action.type) {

        case ADD_TO_CART: {
            return addToCart(state, action);
        }
        case REMOVE_ONE_FROM_CART: {
            return removeOneFromCart(state, action);
        }
        case REMOVE_ALL_FROM_CART: {
            return removeAllFromCart(state, action);
        }
        case CLEAR_CART: {
            return {
                ...state,
                cart: [],
                total: 0,
                cantidadItems: 0
            };
        }
        case RENDER_SEARCH: {
            return renderSearch(state, action);
        }
        case HOME: {
            return {
                ...state,
                products: Products
            };
        } 
        default:
            return state;
    };
}

