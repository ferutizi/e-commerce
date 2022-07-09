import './ShoppingCart.scss'

import { useReducer } from "react"
import { shoppingInitialState, shoppingReducer } from "../reducers/shoppingReducer"
import ProductsItems from "./ProductsItems";
import { TYPES } from '../actions/shoppingActions';
import CartItem from './CartItem';

const ShoppingCart = () => {

    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
    const {products, cart} = state;

    const addToCart = (id) => {
        dispatch({type: TYPES.ADD_TO_CART, payload: id})
    }

    const deleteToCart = () => {
        
    }

    const clearCart = () => {
        
    }

    return(
        <div>
            <h2>Carrito</h2>
            <h3>Productos</h3>
            <article className="card--container">
                {products.map((product) => <ProductsItems key={products.id} data={product} addToCart={addToCart}></ProductsItems>)}
            </article>
            <button onClick={clearCart}>Limpiar carrito</button>
            <h3>items</h3>
            {
                cart.map((item, index) => <CartItem key={index} data={item} deleteToCart={deleteToCart}/>)
            }
        </div>
    )
}

export default ShoppingCart