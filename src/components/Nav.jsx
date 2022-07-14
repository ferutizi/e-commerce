import { useDispatch, useSelector } from 'react-redux'
import { showCart } from '../actions/showCartActions';
import './Nav.scss'

const Nav = () => {

    const state = useSelector(state => state);
    const dispatch = useDispatch();

    return(
        <nav className="nav--container">
            <h1 className="logo">Shop</h1>
            <button
                className="btn--carro"
                onClick={() => dispatch(showCart(state))}
            >carro
            </button>
        </nav>
    )
}

export default Nav