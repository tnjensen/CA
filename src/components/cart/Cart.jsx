import { Link } from 'react-router-dom';
import Checkout from '../checkout/Checkout';
import styles from './cart.module.css';
import { useState, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import useCounter from '../hooks/useCounter';

function Cart(){
    const [cart,setCart,clearCart] = useLocalStorage("cart",[]);
    const [cartTotal, setCartTotal] = useState([]);
    const [counter, setCounter] = useCounter("count");

    useEffect(() => {
        if(cart){
            const total = () => {
                let totalPrice = 0;
                for(let i = 0; i < cart.length; i++){
                  totalPrice += cart[i].price;
                }
                const formatTotal = totalPrice.toFixed(2);
                setCartTotal(formatTotal);
            }
            setCart(cart);
            total();
            
        } 
       
    }, [cart, setCart, counter, setCounter,clearCart]);
   
    const clearItem = () => {
        clearCart();
        setCounter(0);
    }
    return(
        <div className={styles.cartContent}>
            <div className={styles.cartHeader}>
                <h1>Cart</h1>
                <div className={styles.counter}>{counter}</div>
            </div>
            <div className={styles.cartCards}>
            {cart.length ? (
                cart.map((product) => (
                <div key={product.id} className={styles.cartCard}>
                    <h2>{product.title}</h2>
                    <img src={product.imageUrl} alt='Product image' />
                    <p>{product.description}</p>
                    <Link to={"/cart"} className={styles.clearButton} onClick={clearItem}>Remove</Link>
                </div>
                ))   
                  
                ) : (
                    <div className={styles.noContent}>Nothing in cart yet</div>
                ) 
            }
            </div>
           {cart.length ? (
            <div className={styles.totalValue}>{`Total: ${cartTotal}`}
            <Link to={"/checkout"} className={styles.checkoutButton} element={<Checkout />}>Checkout</Link></div> 
                ) : (
                    <div></div>
                )
            }
    </div>
    )
}
export default Cart;