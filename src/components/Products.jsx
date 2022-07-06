import { useState } from 'react'
import './Products.scss'
import productsData from '../data/ProductsData'


const Products = () => {

    const [contador, setContador] = useState(1)

    const aumentar = (item) => {
        setContador(contador + 1)
        item.amount = item.amount + 1
        console.log(item)
        console.log(item.amount)
    }

    return(
        <div className="card--container">
            {productsData.map(item => (
                <div className='card' key={item.name}>
                    <img className="card--img" src={item.img} alt={item.name} />
                    <h4 className="card--name">{item.name}</h4>
                    <p className="card--price">$ {item.price}</p>
                    <button className="btn--product" onClick={event => aumentar(item)}>Agregar al carrito</button>
                </div>
            ))}
        </div>
    )
}

export default Products