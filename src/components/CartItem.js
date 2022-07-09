const CartItem = ({ data, deleteFromCart, clearCart }) => {

    let {id, name, price, img, amount} = data;

    return(
        <div>
            <h4>{name}    ({amount})</h4>
            <h5>${price}</h5>
            <button onClick={() => deleteFromCart()}>Eliminar</button>
            <button onClick={() => clearCart()}>Vaciar</button>
        </div>
    )
}

export default CartItem