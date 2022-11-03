import './CartItem.scss';
const CartItem = ({ data, deleteOneFromCart, deleteAllFromCart }) => {

    let {id, name, price, img, amount} = data;

    return(
        <div className='cart--card'>
            <div className='text--container'>
                <div className='titleprice'>
                    <h4 className='cart--name'>{name}    ({amount})</h4>
                    <p className='cart--price'>${price} X {amount} = ${price * amount}</p>
                </div>
                <img className="cart--img" src={require(`../productos/${img}`)} alt={name} />
            </div>

            <button
                className='btn--delete'
                onClick={() => deleteOneFromCart(id)}
                >Eliminar
            </button>

            <button
                className='btn--delete__all'
                onClick={() => deleteAllFromCart(id, true)}
            >Eliminar Todos
            </button>
            
        </div>
    )
}

export default CartItem;