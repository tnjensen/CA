import { useEffect } from "react";
import styles from './checkout.module.css';
import useLocalStorage from '../hooks/useLocalStorage';
import { Link } from "react-router-dom";
import Home from "../home/Home";
import useCounter from '../hooks/useCounter';

function Checkout(){
    const [cart,setCart,clearCart] = useLocalStorage("cart");
    const [counter, setCounter] = useCounter("count");

    useEffect(() => {
        setCounter(0);
        if(cart){
            setCart(clearCart);
        } 
       
    }, [cart, setCart, counter, setCounter, clearCart]);

    return(
        <div className={styles.checkoutContent}>
        <h4>You have successfully checked out</h4>
        <div className={styles.counter}>{counter}</div>
        <Link to={"/"} className={styles.backButton} element={<Home />}>Continue shopping</Link>
        </div>
    )
}
export default Checkout;