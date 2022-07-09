const CartItem = ({ data, deleteFromCart }) => {

    let {id, name, price, img, amount} = data;

    return(
        <div>
            <h4>{name}    ({amount})</h4>
            <h5>${price}</h5>
            <button onClick={() => deleteFromCart(id)}>Eliminar</button>
            <button onClick={() => deleteFromCart(id, true)}>Eliminar Todos</button>
        </div>
    )
}

export default CartItem