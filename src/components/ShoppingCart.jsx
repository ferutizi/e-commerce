import './ShoppingCart.scss'

import { useDispatch, useSelector } from 'react-redux';
import {addToCart, clearCart, deleteFromCart} from "../actions/shoppingActions"
import { showCart } from '../actions/showCartActions';
import ProductsItems from "./ProductsItems";
import CartItem from './CartItem';

const ShoppingCart = () => {

    const state = useSelector(state => state);
    const dispatch = useDispatch();

    const { products, cart } = state.shopping;

    return(
        <div>
            <h2>Carrito</h2>
            <h3>Productos</h3>
            <article className="card--container">
                {products.map((product) => (
                    <ProductsItems
                        key={products.id}
                        data={product}
                        addToCart={() => dispatch(addToCart(product.id))}
                    />
                ))}
            </article>
            <button onClick={() => console.log(cart.lenght)}>Limpiar carrito</button>

                {state.cart 
                    ? <div className='cart--container'>
                            {cart.length < 1
                                ? <h3 className='cart--title'>El carrito está vacío</h3>
                                : null 
                            }
                            {cart.map((product, index) => (
                                <CartItem
                                    key={index}
                                    data={product}
                                    deleteOneFromCart={() => dispatch(deleteFromCart(product.id))}
                                    deleteAllFromCart={() => dispatch(deleteFromCart(product.id, true))}
                                />
                            ))}
                        </div>
                    : null 
                }
        </div>
    )
}

export default ShoppingCart