import Nav from '../nav/Nav';
import styles from './header.module.css';

function Header(){
    return(
        <header className={styles.headerTop}>
            <div className={styles.headerLeft}>
                <i className='fa fa-home'></i>
                LOGO
            </div>
            <Nav />
            <div className={styles.headerRight}>
                <i className='fa fa-shopping-cart'></i>
            </div>
        </header>
    )
}
export default Header;