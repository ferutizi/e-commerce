import { useDispatch, useSelector } from 'react-redux';
import { showCart } from '../actions/showCartActions';
import { home } from '../actions/shoppingActions';
import Notification from './Notification';
import './Nav.scss';
import SearchBar from './SearchBar';
import logo from '../logo/shop-logo.png'

const Nav = () => {

    const state = useSelector(state => state);
    const dispatch = useDispatch();

    return(
        <div className="nav--container">
            <img src={logo} alt='logo verduleria' className="logo" onClick={() => dispatch(home(state))} />
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