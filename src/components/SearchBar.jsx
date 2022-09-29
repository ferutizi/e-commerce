import './SearchBar.scss';
import { useState } from "react";
import { initialState } from "../reducers/shoppingReducer";
import { useDispatch, useSelector } from 'react-redux';
import { renderSearch } from '../actions/shoppingActions';

const SearchBar = () => {
    const [query, setQuery] = useState("")

    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const { products } = state.shopping;

    return(
        <>
            <div className='search-input'>
                <input 
                    className='search-imput'
                    placeholder='Buscar producto'
                    onChange={event => setQuery(event.target.value)}    
                />
                <div className='search-container'>
                {products.filter(p => {
                    if (query === '') {
                        return null
                    } else if (p.name.toLowerCase().includes(query.toLocaleLowerCase())) {
                        return p;
                    }
                }).map((p, index) => (
                    <div className="search-box" key={index}>
                        <p className='search-item' onClick={() => dispatch(renderSearch(p.id))}>{p.name}</p>
                    </div>
                ))
                }
            </div>
            </div>
        </>
    )
}

export default SearchBar;