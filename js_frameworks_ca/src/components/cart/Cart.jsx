import { Link } from 'react-router-dom';
import Checkout from '../checkout/Checkout';
import styles from './cart.module.css';
import { useState, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

function Cart(){
    /* const [cart,setCart] = useState([JSON.parse(localStorage.getItem("cart"))]); */
    const [cart,setCart] = useLocalStorage("cart", {});
    const [cartTotal, setCartTotal] = useState(0);
  
    const total = () => {
        let totalPrice = 0;
        for(let i = 0; i < cart.length; i++){
          totalPrice += cart[i].price;
        }
        setCartTotal(totalPrice);
    }

    useEffect(() => {
        if(cart){
            setCart(cart);
        } 
        console.log(cart)
        total();
    }, [cart]);
   
    
    return(
        <div className={styles.cartContent}>
            <div className={styles.cartHeader}>
                <h1>Shopping cart</h1>
            </div>
            {cart.length > 0 ? (
                cart.map((product) => (
                <div key={product.id} className={styles.productCard}>
                    <h2>{product.title}</h2>
                    <img src={product.imageUrl} alt='Product image' />
                    <p>{product.description}</p>
                    <div className={styles.totalValue}>{`Total: ${cartTotal}`}</div>
                    <Link to={"/checkout"} className={styles.checkoutButton} element={<Checkout />}>Checkout</Link>
                </div>
                ))     
            ) : (
                <div>Nothing in cart yet</div>
            )
        }
    </div>
    )
}
export default Cart;