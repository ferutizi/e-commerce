import { useDispatch, useSelector } from 'react-redux'
import { showCart } from '../actions/showCartActions';
import Notification from './Notification';
import './Nav.scss'

const Nav = () => {

    const state = useSelector(state => state);
    const dispatch = useDispatch();

    return(
        <nav className="nav--container">
            <h1 className="logo">Shop</h1>
            <div>
                <button
                    className="btn--carro"
                    onClick={() => dispatch(showCart(state))}
                >carro
                    <Notification /> 
                </button>
            </div>
        </nav>
    )
}

export default Nav