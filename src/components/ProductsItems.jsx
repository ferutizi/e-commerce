import './ProductsItems.scss';

const ProductsItems = ({ data, addToCart }) => {

    let {id, name, price, img} = data;

    return(
        <div className='card'>
            <img
                className="card--img"
                src={require(`../productos/${img}`)}
                alt={name}
            />
            <h4 className="card--name">{name}</h4>
            <p className="card--price">$ {price}</p>
            
            <button
                className="btn--product"
                onClick={() => addToCart(id)}
            >Agregar al carrito
            </button>

        </div>
    )
}

export default ProductsItems;