import { Link } from 'react-router-dom';
import Nav from '../nav/Nav';
import styles from './header.module.css';
import Home from '../home/Home';
import Cart from '../cart/Cart';
import useCounter from '../hooks/useCounter';

function Header(){
    const [counter, setCounter] = useCounter("count");
    return(
        <header className={styles.headerTop}>
            <div className={styles.headerContent}>
                <div className={styles.headerLeft}>
                    <Link to={"/"} element={<Home />}><i className='fa fa-home'></i></Link>
                    SHOP
                </div>
                <div className={styles.headerCenter}><Nav /></div>
                <div className={styles.headerRight}>
                    <Link to={"/cart"} element={<Cart />}><i className='fa fa-shopping-cart'></i></Link>
                    <div className={styles.counter}>{counter}</div>
                </div>
            </div>
        </header>
    )
}
export default Header;