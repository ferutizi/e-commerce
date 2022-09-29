import { useDispatch, useSelector } from 'react-redux';
import { showCart } from '../actions/showCartActions';
import Notification from './Notification';
import './Nav.scss';
import SearchBar from './SearchBar';

const Nav = () => {

    const state = useSelector(state => state);
    const dispatch = useDispatch();

    return(
        <div className="nav--container">
            <h1 className="logo">Shop</h1>
            <SearchBar />
            <button
                className="btn--carro"
                onClick={() => dispatch(showCart(state))}
            >carro
                <Notification /> 
            </button>
        </div>
    )
}

export default Nav;