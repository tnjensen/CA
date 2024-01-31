import { Link } from 'react-router-dom';
import Nav from '../nav/Nav';
import styles from './header.module.css';
import Home from '../home/Home';
import Cart from '../cart/Cart';

function Header(){
    return(
        <header className={styles.headerTop}>
            <div className={styles.headerLeft}>
                <Link to={"/"} element={<Home />}><i className='fa fa-home'></i></Link>
                LOGO
            </div>
            <Nav />
            <div className={styles.headerRight}>
                <Link to={"/cart"} element={<Cart />}><i className='fa fa-shopping-cart'></i></Link>
            </div>
        </header>
    )
}
export default Header;