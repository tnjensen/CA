import { Link } from 'react-router-dom';
import Checkout from '../checkout/Checkout';
import styles from './cart.module.css';
import { useState, useEffect } from 'react';

function Cart(){
    const [items,setItems] = useState([JSON.parse(localStorage.getItem("cart"))]);
    
    useEffect(() => {
        if(items){
            setItems(items);
        } 
        console.log(items)
        
    }, [items]);
   
    
    return(
        <div className={styles.cartContent}>
            <div className={styles.cartHeader}>
                <h1>Shopping cart</h1>
            </div>
            {items.length > 0 ? (
                items.map((product) => (
                <div key={product.id} className={styles.productCard}>
                    <h2>{product.title}</h2>
                    <img src={product.imageUrl} alt='Product image' />
                    <p>{product.description}</p>
                    <Link to={"/checkout"} className={styles.checkoutButton} element={<Checkout />}>Checkout</Link>
                </div>
                ))     
            ) : (
                <div>Nothing to display</div>
            )
        }
    </div>
    )
}
export default Cart;