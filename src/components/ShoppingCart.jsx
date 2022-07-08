import './ShoppingCart.scss'

import { useReducer } from "react"
import { shoppingInitialState, shoppingReducer } from "../reducers/shoppingReducer"
import ProductsItems from "./ProductsItems";

const ShoppingCart = () => {

    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
    const {products, cart} = state;

    const addToCart = (id) => {
        console.log(id)
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
            <h3>items</h3>
        </div>
    )
}

export default ShoppingCart