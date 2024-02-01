import styles from './cart.module.css';
import { useState, useEffect } from 'react';

function Cart(){
    const [items,setItems] = useState([JSON.parse(localStorage.getItem("cart"))]);
    
    useEffect(() => {
        if(items){
            setItems(items);
        }
    }, [items]);
   
    return(
        <div className={styles.cartContent}>
            <h1>Cart</h1>
            {items.map((product) => (
                <div key={product.id}>
                <h2>{product.title}</h2>
                <img src={product.imageUrl} />
                <p>{product.description}</p>
                </div>
            ))}
        </div>
    )
}
export default Cart;