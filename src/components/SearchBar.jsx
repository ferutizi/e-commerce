import './SearchBar.scss';
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { renderSearch } from '../actions/shoppingActions';
import Data from '../Products.json'

const SearchBar = () => {
    const [query, setQuery] = useState("")

    const state = useSelector(state => state);
    const dispatch = useDispatch();

    return(
        <>
            <div className='input-container'>
                <input 
                    className='search-input'
                    placeholder='Buscar producto'
                    onChange={event => setQuery(event.target.value)}    
                />
                <div className='search-container'>
                {Data.filter(p => {
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