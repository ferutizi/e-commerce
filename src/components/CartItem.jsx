const CartItem = ({ data, deleteOneFromCart, deleteAllFromCart }) => {

    let {id, name, price, img, amount} = data;

    return(
        <div>
            <h4>{name}    ({amount})</h4>
            <h5>${price}</h5>
            <button onClick={() => deleteOneFromCart(id)}>Eliminar</button>
            <button onClick={() => deleteAllFromCart(id, true)}>Eliminar Todos</button>
        </div>
    )
}

export default CartItem