import { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import styles from './products.module.css';
import { baseUrl } from '../common/settings';
import Product from '../product/Product';
import useCounter from '../hooks/useCounter';
import useLocalStorage from '../hooks/useLocalStorage';

function Products(){
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const url = baseUrl + "online-shop/";
    const [searchInput, setSearchInput] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);
    const [counter, setCounter] = useCounter("count");
    const [cart, setCart] = useLocalStorage("cart", []);
    
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
    },[url,setCounter,cart,setCart]);

    if(isLoading){
        return <div>Loading...</div>;
    }
    if(isError){
        return <div>Error loading data</div>;
    }
    const searchItems = (searchValue) => {
        setSearchInput(searchValue);
        if (searchInput !== '') {
            const filteredData = products.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else{
            setFilteredResults(products)
        }
    }

    return(
        <>
        <div className={styles.searchBar}>
            <input type="text" name='products' placeholder='Search products' 
            onChange={(e) => searchItems(e.target.value)}/>
        </div>
        <div className={styles.mainContent}>
            <div className={styles.products}>
            {searchInput.length > 1 ? (
                filteredResults.map((product) => (
                    <div key={product.id} className={styles.productCard}>
                        <h2>{product.title}</h2>
                        <Link to={"/product/" + product.id} element={<Product />}><img src={product.imageUrl} alt='Product image' /></Link>
                        <p className={styles.productDescription}>{product.description}</p>
                        <Link to={"/product/" + product.id} className={styles.viewProductButton} element={<Product />}>View product</Link>
                    </div>
                ))
            ) : (
            products.map((product) => (
                    <div key={product.id} className={styles.productCard}>
                        <h2>{product.title}</h2>
                        <Link to={"/product/" + product.id} element={<Product />}><img src={product.imageUrl} alt='Product image' /></Link>
                        <p className={styles.productDescription}>{product.description}</p>
                        <Link to={"/product/" + product.id} className={styles.viewProductButton} element={<Product />}>View product</Link>
                    </div>
                ))
            )
        }
            </div>  
        </div>
        </>
    );
}
export default Products;