import { useState } from 'react';
import styles from './search.module.css';

function Search(){
    const [searchInput, setSearchInput] = useState('');
    const searchItems = (searchValue) => {
        setSearchInput(searchValue);
        console.log(searchValue);
    }
    return(
        <div className={styles.searchBar}>
            Search: 
            <span>
                <input type="text" placeholder='Find product' 
                onChange={(e) => searchItems(e.target.value)}/>
        </span>
        </div>
    )
}
export default Search;