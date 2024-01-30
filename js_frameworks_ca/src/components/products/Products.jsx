import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './products.module.css';
import { baseUrl } from '../common/settings';
import Product from '../product/Product';

function Products(){
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const url = baseUrl + "online-shop/";
    const [searchInput, setSearchInput] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);
    
    useEffect(() => {
        async function getData(){
            try{
                //Clear any previous errors
                setIsError(false);
                //Turn on loading state for each API call
                setIsLoading(true);
                const response = await fetch(url);
                const result = await response.json();
                setProducts(result);
                console.log(result);
                //Clear loading state
                setIsLoading(false);
            }
            catch(error){
                //Clear loading state if error and set error state
                setIsLoading(false);
                setIsError(true);
            }
        }
        getData();
    },[]);
    
    if(isLoading){
        return <div>Loading...</div>;
    }
    if(isError){
        return <div>Error loading data</div>;
    }
    const searchItems = (searchValue) => {
        setSearchInput(searchValue);
        if (searchInput !== '') {
            const filteredResults = products.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredResults)
        }
        else{
            setFilteredResults(products)
        }
        console.log(searchInput);
    }

    return(
        <>
        <div className={styles.searchBar}>
        Search: 
        <span>
            <input type="text" placeholder='Find product' 
            onChange={(e) => searchItems(e.target.value)}/>
        </span>
        </div>
        <div className={styles.mainContent}>
            {filteredResults.map((product) => (
                <div key={product.id} className={styles.productCard}>
                    <h2>{product.title}</h2>
                    <Link to={"/product/" + product.id} element={<Product />}><img src={product.imageUrl} alt='Product image' /></Link>
                    <p>{product.description}</p>
                </div>
            ))}
        </div>
        </>
    );
}
export default Products;