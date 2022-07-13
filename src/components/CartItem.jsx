import './CartItem.scss'

const CartItem = ({ data, deleteOneFromCart, deleteAllFromCart }) => {

    let {id, name, price, img, amount} = data;

    return(
        <div className='cart--card'>
            <h4 className='cart--name'>{name}    ({amount})</h4>
            <h5 className='cart--price'>${price} X {amount} = ${price * amount}</h5>
            <button className='btn--delete' onClick={() => deleteOneFromCart(id)}>Eliminar</button>
            <button className='btn--delete__red' onClick={() => deleteAllFromCart(id, true)}>Eliminar Todos</button>
        </div>
    )
}

export default CartItem