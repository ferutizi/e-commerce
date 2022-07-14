import {
    ADD_TO_CART,
    CLEAR_CART,
    REMOVE_ALL_FROM_CART,
    REMOVE_ONE_FROM_CART
} from "../types";

export const initialState = {
    products: [
    { 
        id: 1,
        name: 'Tomate',
        price: 15,
        amount: 0,
        img: '/productos/tomate.jpg'
    },
    { 
        id: 2,
        name: 'Lechuga',
        price: 8,
        amount: 0,
        img: '/productos/lechuga.jpg'
    },
    { 
        id: 3,
        name: 'Arbejas',
        price: 10,
        amount: 0,
        img: '/productos/arbejas.jpg'
    },
],
    cart:[],
};

export function shoppingReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_TO_CART: {
            let newItem = state.products.find(
                product => product.id === action.payload
            );
            
            let itemInCart = state.cart.find(item => item.id === newItem.id)

            return itemInCart 
                ? {
                    ...state,
                    cart: state.cart.map(item => item.id === newItem.id 
                        ? {...item, amount: item.amount +1} 
                        : item),
                    }
                : {
                    ...state,
                    cart: [...state.cart, {...newItem, amount: +1}],
                }
        }
        case REMOVE_ONE_FROM_CART: {
            let itemToDelete = state.cart.find(
                product => product.id === action.payload
            );
            
            return itemToDelete.amount > 1 
            ? { 
                ...state,
                cart: state.cart.map(item => item.id === itemToDelete.id 
                        ? {...item, amount: item.amount -1} 
                        : item
                ),
            }
            : {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload),
            };
        }
        case REMOVE_ALL_FROM_CART: {
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload),
            };
        }
        case CLEAR_CART: {
            return initialState
        }
        default:
            return state;
    };
}