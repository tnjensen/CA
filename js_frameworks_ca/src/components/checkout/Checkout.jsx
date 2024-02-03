import { useState } from "react";
import styles from './checkout.module.css';

function Checkout(){
    const [checkoutItems,setCheckoutItems] = useState([]);

    return(
        <div className={styles.checkoutHeader}>Success</div>
    )
}
export default Checkout;