import styles from './cart.module.css';
import { useState } from 'react';

function Cart(){
    const [cart,setCart] = useState([]);
    
    const addToCart = (item) =>{
        setCart([...cart, item]);
        console.log(item)
    }
    return(
        <div className={styles.cartContent}>
            <h1>Cart</h1>
        </div>
    )
}
export default Cart;