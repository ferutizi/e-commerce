import './ShoppingCart.scss'

import { useDispatch, useSelector } from 'react-redux';
import {addToCart, clearCart, deleteFromCart} from "../actions/shoppingActions"
import ProductsItems from "./ProductsItems";
import CartItem from './CartItem';

const ShoppingCart = () => {

    const state = useSelector(state => state);
    const dispatch = useDispatch();

    const { products, cart, total } = state.shopping;

    return(
        <div>
            <article className="card--container">
                {products.map((product) => (
                    <ProductsItems
                        key={products.id}
                        data={product}
                        addToCart={() => dispatch(addToCart(product.id))}
                    />
                ))}
            </article>

                {state.cart 
                    ? <div className='cart--container'>
                            {cart.length < 1
                                ? <h3 className='cart--empty'>El carrito está vacío</h3>
                                : <div>
                                    {cart.map((product, index) => (
                                        <CartItem
                                            key={index}
                                            data={product}
                                            deleteOneFromCart={() => dispatch(deleteFromCart(product.id))}
                                            deleteAllFromCart={() => dispatch(deleteFromCart(product.id, true))}
                                        />
                                    ))}

                                    <p className='card--price'>total: {total} $</p>
                                    <button
                                        className='btn--delete'
                                        onClick={() => dispatch(clearCart())}
                                    >Limpiar carrito
                                    </button>

                                    <button
                                        className='btn--delete__all'
                                    >Ir a pagar
                                    </button>

                                </div>
                            }

                        </div>
                    : null 
                }
        </div>
    )
}

export default ShoppingCart