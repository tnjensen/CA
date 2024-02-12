import { useState, useEffect } from "react";
import styles from './checkout.module.css';
import useLocalStorage from '../hooks/useLocalStorage';
import { Link } from "react-router-dom";
import Home from "../home/Home";

function Checkout(){
    const [checkoutItems,setCheckoutItems] = useState([]);
    const [cart,setCart,clearCart] = useLocalStorage("cart");

    useEffect(() => {
        if(cart){
            setCart(clearCart);
        } 
       
    }, [cart, setCart, clearCart]);

    return(
        <div className={styles.checkoutContent}>
        <h4>You have successfully checked out</h4>
        <Link to={"/"} className={styles.backButton} element={<Home />}>Continue shopping</Link>
        </div>
    )
}
export default Checkout;